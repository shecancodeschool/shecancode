import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import SignUpForm from "../_components/SignUpForm"

export default function page() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <div className="flex w-full items-center justify-center">
          <Image src="/logo/logo1.png" alt="Logo" width={100} height={100} />
        </div>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
    </Card>
  )
}
