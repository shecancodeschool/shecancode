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
        <CardTitle className="text-2xl">Change Password</CardTitle>
        <CardDescription>
          Create a new password bellow. Make sure you put in a strong password.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Reset password
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
