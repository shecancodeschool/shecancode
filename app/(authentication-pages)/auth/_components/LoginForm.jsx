"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { LoadingButton } from "@/app/(dashboard-pages)/dashboard/_components/widgets/Loader";

const formSchema = z.object({
  email: z.string().email().min(6, {
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Password must be atleast 6 characters long",
  })
});

export default function LoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data) {
    const { email, password } = data;
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (response?.error) {
      console.log(response.error);
      if (response.error === "CredentialsSignin") {
        toast.error("Invalid email or password");
      }
    }

    if (response.ok) {
      toast.success("Logged in successfully!");
      form.reset();
      router.push('/dashboard');
    }
  }

  const isLoading = form.formState.isSubmitting;

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex w-full justify-between items-center">
                    Password
                    <div className="flex gap-2 items-center">
                      <Checkbox id="Show password" name={"isPasswordVisible"} onClick={() => { setIsPasswordVisible(!isPasswordVisible) }} />
                      <label htmlFor="Show password">View password</label>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <Input type={isPasswordVisible ? "text" : "password"} placeholder="Your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-2 text-start text-sm">
              <Link href="/auth/forgot" className="underline">
                Forgot password?
              </Link>
            </div>
          </div>
          {isLoading ? (
            <LoadingButton btnText={"Loading..."} btnClass={"w-full"} btnVariant={"default"} /> 
          ) : (
          <Button type="submit" className="w-full" >
            Sign in
          </Button>
          )}
          {/* <Button type="button" variant="outline" className="w-full flex gap-2" onClick={() => signIn("github")}>
            Sign in with GitHub
            <Image src="/github-logo.png" alt="GitHub" width={20} height={20} />
          </Button> */}
        </form>
      </Form>
    </div>
  )
}
