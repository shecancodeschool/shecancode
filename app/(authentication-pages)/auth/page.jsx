import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import LoginForm from "./_components/LoginForm";

export default async function page() {
  const session = await getServerSession();
  if (session) {
    return redirect("/dashboard");
  }

  return (
    <Card className="mx-auto w-10/12 sm:w-5/12 lg:w-4/12">
      <CardHeader>
        <div className="flex w-full items-center justify-center">
          <Image src="/logo/logo1.png" alt="Logo" width={100} height={100} />
        </div>
        <CardTitle className="text-xl">Login</CardTitle>
        <CardDescription>
          Enter your information to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  )
}
