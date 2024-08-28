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
import { registerUser } from "../../_actions/auth";

const formSchema = z.object({
    firstName: z.string().min(3, {
        message: "First name must be at least 3 characters",
    }),
    lastName: z.string().min(3, {
        message: "Last name must be at least 3 characters",
    }),
    email: z.string().email().min(6, {
        message: "Email is required",
    }),
    password: z.string().min(6, {
        message: "Password must be atleast 6 characters long",
    })
});

export default function SignUpForm() {
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
        const { firstName, lastName, email, password } = data;
        const formData = { firstName, lastName, email, password };
        const response = await registerUser(formData);
        if (response?.error) {
            console.log(response.error);
            toast.error(response.error);
        }
        if (response?.message) {
            toast.success(response.message);
            router.push('/auth/login');
        }
        form.reset();
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            First name
                                        </FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Your first name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Last name
                                        </FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Your last name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
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
                                            <Checkbox id="Show password" name={"isPasswordVisible"} onClick={() => { setIsPasswordVisible(!isPasswordVisible) }}/>
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
                    </div>
                    <Button type="submit" className="w-full">
                        Create an account
                    </Button>
                    <Button variant="outline" className="w-full">
                        Sign up with GitHub
                    </Button>
                </form>
            </Form>
            <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="/auth/login" className="underline">
                    Sign in
                </Link>
            </div>
        </div>
    )
}
