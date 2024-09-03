"use client"

import React, { useState, useRef } from 'react';
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import slugify from 'react-slugify';
import { toast } from 'sonner';
import { LoadingButton } from '../widgets/Loader';
import DOMPurify from 'dompurify';
import { Textarea } from '@/components/ui/textarea';
import { storage } from '@/utils/firebase/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Image from 'next/image';
import { ActionModal } from '../widgets/ActionModal';
import { Separator } from '@/components/ui/separator';
import { createStoredImage } from '../../_actions/storedImageActions';
import { cn } from '@/lib/utils';
import { addNewCourse, updateCourse } from '@/app/(visitor-pages)/_actions/courses';
import dynamic from 'next/dynamic';

const formSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters." }),
  slug: z.string().optional(),
  level: z.string().optional(),
  location: z.string().min(3, { message: "Location is required" }),
  schedule: z.string().optional(),
  coverImage: z.string().optional(),
  subTitle: z.string().min(5, { message: "Subtitle is required" }),
  description: z.string().min(5, { message: "Description is required" }),
  prerequisites: z.string().min(5, { message: "Course pre-requisites are required" }),
  category: z.string().min(3, { message: "Category is required" }),
  status: z.string().min(3, { message: "Status is required" }),
  startDate: z.date({ required_error: "A start date is required." }),
  price: z.string().min(1, { message: "Price is required" }),
  duration: z.string().min(1, { message: "Duration is required" }),
  durationType: z.string().min(3, { message: "Duration type is required" }),
  isOpen: z.string().min(1, { message: "Is open is required" }),
  isFeatured: z.string().min(1, { message: "Is featured is required" }),
})

export default function CourseForm({ categories, storedImages, id, course }) {
  const [image, setImage] = useState("");
  const [imageUploadProgress, setImageUploadProgress] = useState(0);
  const [open, setOpen] = useState(false);

  const storeImage = async (uploaded) => {
    await createStoredImage({ image: uploaded });
  }

  const uploadToFirebase = (file) => {
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on("state_changed", (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setImageUploadProgress(progress);
      },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              storeImage(downloadURL);
              resolve(downloadURL);
            })
            .catch((error) => {
              reject(error);
            });
        });
    });
  };

  const handleImageFile = (e) => {
    e.preventDefault();

    const files = Object.values(e.target.files).filter((file) => file.type.startsWith("image/"));
    uploadToFirebase(files[0])
      .then((uploaded) => {
        setImage(uploaded);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editor1 = useRef(null);
  const editor2 = useRef(null);

  const router = useRouter();

  const courseDetails = course;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: courseDetails?.title || "",
      subTitle: courseDetails?.subTitle || "",
      prerequisites: courseDetails?.prerequisites || "",
      slug: courseDetails?.slug || "",
      subTitle: courseDetails?.subTitle || "",
      prerequisites: courseDetails?.prerequisites || "",
      isOpen: courseDetails?.isOpen || "No",
      coverImage: courseDetails?.coverImage || "",
      category: courseDetails?.category || "",
      description: courseDetails?.description || "",
      status: courseDetails?.status || "Draft",
      isFeatured: courseDetails?.isFeatured || "No",
      price: courseDetails?.price || 0,
      duration: courseDetails?.duration || 0,
      durationType: courseDetails?.durationType || "",
      startDate: courseDetails?.startDate || "",
      level: courseDetails?.level || "",
      location: courseDetails?.location || "",
      schedule: courseDetails?.schedule || ""
    },
  })

  const isLoading = form.formState.isSubmitting;

  const handleBlurDescription = (description) => {
    form.setValue("description", description);
  };

  const handleBlurCoursePrerequisites = (content) => {
    form.setValue("prerequisites", content);
  };

  async function onSubmit(values) {
    const { title, description, category, content, status, isOpen, allowedForBlog, isFeatured, price, duration, durationType, startDate, level, location, schedule, subTitle, prerequisites } = values;

    const formData = {
      id: id ? id : "",
      title,
      slug: slugify(title, { lower: true, trim: true }),
      coverImage: image ? image : courseDetails?.coverImage,
      category,
      description: DOMPurify.sanitize(description),
      content: DOMPurify.sanitize(content),
      status,
      level,
      location,
      subTitle,
      prerequisites,
      schedule,
      allowedForBlog,
      isFeatured,
      isOpen,
      price,
      duration,
      durationType,
      startDate
    }

    if (id) {
      const res = await updateCourse(formData);
      if (res?.error) {
        toast.error(res?.error);
      }
      if (res?.message) {
        toast.success(res?.message);
        router.push("/dashboard/courses")
      }
      form.reset();
    } else {
      const res = await addNewCourse(formData);
      if (res?.error) {
        toast.error(res?.error);
      }
      if (res?.message) {
        toast.success(res?.message);
        router.push(`/dashboard/courses/${res.course._id}/modules`)
      }
      form.reset();
    }
  }
  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="w-full max-w-[500px]">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course title</FormLabel>
                  <FormControl>
                    <Input placeholder="Course title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full max-w-[500px]">
            <FormField
              control={form.control}
              name="subTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sub Title</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Add a short subtitle here..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide a short subtitle for this course.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Description</FormLabel>
                <FormControl>
                  <JoditEditor
                    ref={editor1}
                    value={field.value}
                    config={{
                      height: "600%",
                      style: {
                        color: "#3f3f46"
                      },
                      useCommandShortcut: true,
                      askBeforePasteHTML: false
                    }}
                    tabIndex={1}
                    onBlur={(newContent) => handleBlurDescription(newContent)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Other course key info  */}
          <Separator className="my-4 border-b-[1px] border-gray-500" />
          <div className="w-full flex justify-between flex-wrap ">
            <div className="w-full md:w-[32%]">
              <FormField
                control={form.control}
                name="schedule"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Schedule(optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Course schedule" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full md:w-[32%]">
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={"Beginner"}>Beginner</SelectItem>
                        <SelectItem value={"Intermediate"}>Intermediate</SelectItem>
                        <SelectItem value={"Advanced"}>Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full md:w-[32%]">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose course location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={"Online"}>Online</SelectItem>
                        <SelectItem value={"In-Person"}>In-person</SelectItem>
                        <SelectItem value={"Hybrid"}>Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Image management  */}
          <Separator className="mt-4 border-b-[1px] border-gray-500" />
          <div className="w-full flex justify-between flex-wrap ">
            <div className="w-full md:w-[48%]">
              <Label>Add Cover Image (Upload file)
                {imageUploadProgress !== 0 &&
                  <span className="text-sm text-green-600">
                    Uploading {imageUploadProgress} %
                  </span>}
              </Label>
              <Card>
                <input
                  type="file"
                  multiple
                  accept="png, gif, jpg, jpeg"
                  id="imageFiles"
                  name="imageFiles"
                  onChange={handleImageFile}
                  className="mt-1 w-full py-2 px-3 rounded-md border-slate-600 shadow-sm sm:text-sm"
                />
              </Card>
            </div>
            <div className="w-full md:w-[48%]">
              <FormField
                control={form.control}
                name="coverImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Add Cover Image by Pasting image link (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Paste Image Link" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="w-full flex justify-between flex-wrap ">
            <div className="w-full md:w-[48%]">
              <ActionModal
                title="Choose image"
                desc="Choose image from store"
                trigger={
                  <Button variant="default" className="text-white">Choose From Store</Button>
                }
                cancelBtnText="Close"
                onClick={(image) => {
                  form.setValue("image", image);
                  setImage(image);
                }}
                open={open}
                setOpen={setOpen}
              >
                <div className='flex w-full gap-2 flex-wrap overflow-y-scroll'>
                  {storedImages?.map((item) => (
                    <Image
                      src={item.image}
                      onClick={() => setImage(item.image)}
                      key={item.image}
                      alt={item.image}
                      className={cn(image === item.image ? "border-2 border-green-500 rounded-md" : "", 'w-full md:w-[48%]')}
                      width={200}
                      height={50}
                    />
                  ))}
                </div>
              </ActionModal>
            </div>
            {image && <div className="w-full md:w-[48%]">
              <Image src={image} alt={image} width={500} height={200} />
            </div>}
          </div>
          <Separator className="my-4 border-b-[1px] border-gray-500" />
          <div className="w-full flex justify-between flex-wrap">
            <div className='w-full md:w-[31%]'>
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories?.map((category, index) => (<SelectItem key={index} value={category.name}>{category.name}</SelectItem>))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='w-full md:w-[31%]'>
              <FormField
                control={form.control}
                name="isOpen"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Is Open</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={"Yes"}>Yes</SelectItem>
                        <SelectItem value={"No"}>No</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='w-full md:w-[31%]'>
              <FormField
                control={form.control}
                name="isFeatured"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Is Featured</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={"Yes"}>Yes</SelectItem>
                        <SelectItem value={"No"}>No</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Separator className="mt-4 border-b-[1px] border-gray-500" />
          <FormField
            control={form.control}
            name="prerequisites"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course prerequisites</FormLabel>
                <FormControl>
                  <JoditEditor
                    ref={editor2}
                    value={field.value}
                    config={{
                      height: "600%",
                      style: {
                        color: "#3f3f46"
                      },
                      useCommandShortcut: true,
                      askBeforePasteHTML: false
                    }}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={(newContent) => handleBlurCoursePrerequisites(newContent)} // preferred to use only this option to update the content for performance reasons
                  // onChange={(newContent) => { }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Separator className="my-4 border-b-[1px] border-gray-500" />
          <div className="w-full flex justify-between flex-wrap ">
            <div className="w-full md:w-[23%]">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="Course price" {...field} />
                    </FormControl>
                    <FormDescription>
                      Course price in RWF
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full md:w-[23%]">
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration</FormLabel>
                    <FormControl>
                      <Input placeholder="Choose duration" {...field} />
                    </FormControl>
                    <FormDescription>
                      Provide course duration either in (hours, days, or months)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full md:w-[23%]">
              <FormField
                control={form.control}
                name="durationType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose duration type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={"Hour(s)"}>Hour(s)</SelectItem>
                        <SelectItem value={"Day(s)"}>Day(s)</SelectItem>
                        <SelectItem value={"Week(s)"}>Week(s)</SelectItem>
                        <SelectItem value={"Month(s)"}>Month(s)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full md:w-[23%]">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Start Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date < new Date("2024-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Separator className="my-4 border-b-[1px] border-gray-500" />
          <div className="w-full max-w-[500px]">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Draft">Draft</SelectItem>
                      <SelectItem value="Published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full max-w-[500px]">
            {
              isLoading ? (
                <LoadingButton btnText={"Loading..."} btnClass={"w-full"} btnVariant={"default"} />
              ) : (
                <Button type="submit" className="w-fit">
                  {id ? "Update course" : "Create Course"}
                </Button>
              )
            }
          </div>
        </form>
      </Form>
    </div >
  )
}
