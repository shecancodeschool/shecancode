"use client"

import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import ApplicationPriceConfirmationAlert from "./ApplicationPriceConfirmationAlert"
import { useActionState, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { applyForCourse } from "@/app/(visitor-pages)/_actions/courses"

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string(),
  gender: z.string(),
  age: z.string(),
  courseName: z.string().optional(),
  residence: z.string(),
  linkedInAccount: z.string().optional(),
  githubAccount: z.string().optional(),
  doYouHaveALaptop: z.string(),
  refugeeStatus: z.string(),
  howDidYouHearAboutThisJob: z.string(),
  academicBackground: z.string(),
  universityBeingAttended: z.string().optional(),
  currentOccupation: z.string(),
  motivation: z.string(),
  disability: z.string().optional(),
  disabled: z.string().default("No"),
});

export default function ApplyForCourseForm({ courseId, registrationFee, courseName, slug }) {
  const [fee, setFee] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [isRegistrationFeeCorrect, setIsRegistrationFeeCorrect] = useState(false);

  const handleRegistrationFee = (e) => {
    setFee(e.target.value);
    setIsRegistrationFeeCorrect(e.target.value === registrationFee);
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "courseName": "courseName",
    },
  })

  function onSubmit(values) {
    setSubmitting(true);
    applyForCourse({
      course: courseId,
      courseName: courseName,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      gender: values.gender,
      age: values.age,
      residence: values.residence,
      linkedInAccount: values.linkedInAccount,
      githubAccount: values.githubAccount,
      doYouHaveALaptop: values.doYouHaveALaptop,
      refugeeStatus: values.refugeeStatus,
      howDidYouHearAboutThisJob: values.howDidYouHearAboutThisJob,
      academicBackground: values.academicBackground,
      universityBeingAttended: values.universityBeingAttended,
      currentOccupation: values.currentOccupation,
      motivation: values.motivation,
      disability: values.disability,
      disabled: values.disabled,
    })
      .then((response) => {
        toast.success(response.message);
        setSubmitting(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setSubmitting(false);
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-3xl mx-auto py-10 px-5">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      className="border-2 border-black"
                      type="text"
                      {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Last name"
                      className="border-2 border-black"
                      type="text"
                      {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="sample@example.com"
                      className="border-2 border-black"
                      type="email"
                      {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+250"
                      className="border-2 border-black"
                      type="phone"
                      {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="border-2 border-black">
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="0"
                      className="border-2 border-black"
                      type="text"
                      {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="residence"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Residence</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex: Gasabo, Kacyiru"
                  className="border-2 border-black"
                  type="text"
                  {...field} />
              </FormControl>
              <FormDescription>Provide your current district and sector of residence.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <FormField
              control={form.control}
              name="linkedInAccount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn Profile</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.linkedin.com/in/...."
                      className="border-2 border-black"
                      type="text"
                      {...field} />
                  </FormControl>
                  <FormDescription>Link to your LinkedIn Profile</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <FormField
              control={form.control}
              name="githubAccount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Github Account</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://github.com/..."
                      className="border-2 border-black"
                      type="text"
                      {...field} />
                  </FormControl>
                  <FormDescription>Link to your GitHub Account</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="doYouHaveALaptop"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you have access to a Laptop?</FormLabel>
              <Select className="border-2 border-black" onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="border-2 border-black">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                  <SelectItem value="Not in good condition">It is not in good condition</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>If you do not have a working computer, you will be provided with a computer for the duration of the program. And please note that you and your guardian or parent will sign a contract for borrowing according to the work device policy.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="howDidYouHearAboutThisJob"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How did you know about this opportunity?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="border-2 border-black">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose Option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Facebook">Facebook</SelectItem>
                  <SelectItem value="Instagram">Instagram</SelectItem>
                  <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                  <SelectItem value="X">X</SelectItem>
                  <SelectItem value="From a friend">From a friend</SelectItem>
                  <SelectItem value="WhatsApp Group">WhatsApp Group</SelectItem>
                  <SelectItem value="Email">Email</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <FormField
              control={form.control}
              name="academicBackground"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is your most recent academic background?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="border-2 border-black">
                      <SelectTrigger>
                        <SelectValue placeholder="Select the option that applies to you" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="High School Graduate">High School Graduate</SelectItem>
                      <SelectItem value="Joining University in the next 6 months">Joining University in the next 6 months</SelectItem>
                      <SelectItem value="Attending Year 1 at University">Attending Year 1 at University</SelectItem>
                      <SelectItem value="Attending Year 2 at University">Attending Year 2 at University</SelectItem>
                      <SelectItem value="Attending Year 3 at University">Attending Year 3 at University</SelectItem>
                      <SelectItem value="Attending Year 4 at University">Attending Year 4 at University</SelectItem>
                      <SelectItem value="I am in final year at University">I am in final year at University</SelectItem>
                      <SelectItem value="I have graduated from University">I have graduated from University</SelectItem>
                      <SelectItem value="Did not attend univeristy">Did not attend univeristy</SelectItem>
                      <SelectItem value="Not attending university soon">Not attending university soon</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <FormField
              control={form.control}
              name="universityBeingAttended"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Which university are you attending?</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      className="border-2 border-black"
                      type="text"
                      {...field} />
                  </FormControl>
                  <FormDescription>Fill in this field if you are attending university</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="currentOccupation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Occupation</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="border-2 border-black">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose the option that applies to you" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Student">Student</SelectItem>
                  <SelectItem value="Employed Full-time">Employed Full-time</SelectItem>
                  <SelectItem value="Employed Part-time">Employed Part-time</SelectItem>
                  <SelectItem value="Unemployed">Unemployed</SelectItem>
                  <SelectItem value="In waiting year">In waiting year</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <FormField
              control={form.control}
              name="currentOccupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Occupation</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="border-2 border-black">
                      <SelectTrigger>
                        <SelectValue placeholder="Choose the option that applies to you" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Student">Student</SelectItem>
                      <SelectItem value="Employed Full-time">Employed Full-time</SelectItem>
                      <SelectItem value="Employed Part-time">Employed Part-time</SelectItem>
                      <SelectItem value="Unemployed">Unemployed</SelectItem>
                      <SelectItem value="In waiting year">In waiting year</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <FormField
              control={form.control}
              name="refugeeStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Refugee Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="border-2 border-black">
                      <SelectTrigger>
                        <SelectValue placeholder="Choose the option that applies to you" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Refugee">Refugee</SelectItem>
                      <SelectItem value="Not a Refugee">Not a Refugee</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <FormField
              control={form.control}
              name="disabled"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Do you have any disability?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="border-2 border-black">
                      <SelectTrigger>
                        <SelectValue placeholder="Select the option that applies to you" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>Do you have a disability that we need to be aware of so as to facilitate your participation in the admission process and learning process?</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <FormField
              control={form.control}
              name="disability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is your disability?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="border-2 border-black">
                      <SelectTrigger>
                        <SelectValue placeholder="Choose the option that applies to you" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Physical impairment">Physical impairment</SelectItem>
                      <SelectItem value="Visual impairment">Visual impairment</SelectItem>
                      <SelectItem value="Hearing impairment">Hearing impairment</SelectItem>
                      <SelectItem value="Mental impairment">Mental impairment</SelectItem>
                      <SelectItem value="Short Stature/Little people">Short Stature/Little people</SelectItem>
                      <SelectItem value="People with Albinism">People with Albinism</SelectItem>
                      <SelectItem value="Deaf blind">Deaf blind</SelectItem>
                      <SelectItem value="Autism">Autism</SelectItem>
                      <SelectItem value="Multiple disabilities">Multiple disabilities</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>Note:  By submitting your response SheCanCODE Bootcamp securely uses and stores you information according to our privacy policy.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="motivation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What motivated you to join this course/program?</FormLabel>
              <FormControl>
                <Textarea
                  rows={6}
                  placeholder="Your answer goes here ..."
                  className="border-2 border-black resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-4 bg-sky-300 p-4 rounded-lg">
          <span className="font-bold text-sm">Are you ready to submit this application? To join this course, you will be charged a non-refundable registration fee.</span>
          <span className="font-bold text-sm">Please confirm that you are aware of this and that you are ready to proceed by writing the application fee in the box bellow.</span>
          <div className="flex flex-col ">
            <Label htmlFor="registrationFee">Write:
              <em className="font-bold"> {registrationFee}</em>
            </Label>
            <input
              type="text"
              className="border-2 border-black mt-2 rounded-lg px-4 py-2 w-full"
              name="fee"
              id="fee"
              placeholder="The text goes here ..."
              value={fee}
              onChange={handleRegistrationFee}
            />
          </div>
        </div>
        {/* <Button type="submit">Continue</Button> */}
        {/* <ApplicationPriceConfirmationAlert fee={registrationFee} applicationData={applicationData} /> */}
        <Button type="submit" disabled={!isRegistrationFeeCorrect}>{submitting ? "Submitting..." : "Submit"}</Button>
      </form>
    </Form>
  )
}

