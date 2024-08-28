import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function page() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <div className="flex w-full items-center justify-center">
          <Image src="/logo/logo1.png" alt="Logo" width={100} height={100} />
        </div>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to get a reset link.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Go back to Login{" "}
          <Link href="/auth/login" className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
