"use client"

import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import slugify from 'react-slugify';
import { toast } from 'sonner';
import { createArticle, updateArticle } from '../../_actions/articlesActions';
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

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  slug: z.string().optional(),
  image: z.string().optional(),
  description: z.string().min(5, { message: "Description is required" }),
  category: z.string().min(3, { message: "Category is required" }),
  content: z.string().min(5, { message: "Content is required" }),
  status: z.string().min(3, { message: "Status is required" }),
  allowedForBlog: z.preprocess((val) => {
    if (typeof val === "string") {
      return val.toLowerCase() === "true";
    }
    return Boolean(val);
  }, z.boolean().optional()),
  isFeatured: z.preprocess((val) => {
    if (typeof val === "string") {
      return val.toLowerCase() === "true";
    }
    return Boolean(val);
  }, z.boolean().optional()),
})

export default function PostForm({ categories, storedImages, id, post }) {
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



  const editor = useRef(null);

  const router = useRouter();

  const articleDetails = post;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: articleDetails?.title || "",
      slug: articleDetails?.slug || "",
      image: articleDetails?.image || "",
      category: articleDetails?.category || "",
      description: articleDetails?.description || "",
      content: articleDetails?.content || "",
      status: articleDetails?.status || "",
      allowedForBlog: articleDetails?.allowedForBlog || false,
      isFeatured: articleDetails?.isFeatured || false,
    },
  })

  const isLoading = form.formState.isSubmitting;

  const handleBlur = (content) => {
    form.setValue("content", content);
  };

  async function onSubmit(values) {
    const { title, description, category, content, status, allowedForBlog, isFeatured } = values;

    const formData = {
      id: id ? id : "",
      title,
      slug: slugify(title, { lower: true, trim: true }),
      image: image ? image : articleDetails?.image,
      category,
      description,
      content: DOMPurify.sanitize(content),
      status,
      allowedForBlog,
      isFeatured
    }

    if (id) {
      const res = await updateArticle(formData);
      if (res?.error) {
        toast.error(res?.error);
      }
      if (res?.message) {
        toast.success(res?.message);
        router.push("/dashboard/blog")
      }
      form.reset();
    } else {
      const res = await createArticle(formData);
      if (res?.error) {
        toast.error(res?.error);
      }
      if (res?.message) {
        toast.success(res?.message);
        router.push("/dashboard/blog")
      }
      form.reset();
    }
  }
  return (
    <div className="text-color-text">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="w-full max-w-[500px]">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Post title</FormLabel>
                  <FormControl>
                    <Input placeholder="Post title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full max-w-[500px]">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Provide a summarized description here..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide a summarized description of the content of this article.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
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
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Add Cover Image (Paste Image Link)</FormLabel>
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
                      className={cn(image === item.image ? "border-2 border-green-500 rounded-md" : "",'w-full md:w-[48%]')} 
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
                name="allowedForBlog"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Allowed for blog</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={true}>Yes</SelectItem>
                        <SelectItem value={false}>No</SelectItem>
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
                        <SelectItem value={true}>Yes</SelectItem>
                        <SelectItem value={false}>No</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post content</FormLabel>
                <FormControl>
                  <JoditEditor
                    ref={editor}
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
                    onBlur={(newContent) => handleBlur(newContent)} // preferred to use only this option to update the content for performance reasons
                  // onChange={(newContent) => { }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full max-w-[500px]">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Post status</FormLabel>
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
                  {id ? "Update article" : "Create Article"}
                </Button>
              )
            }
          </div>
        </form>
      </Form>
    </div >
  )
}
