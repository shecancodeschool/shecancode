"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Home, Menu, Newspaper, Paperclip, ShoppingCart, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MdWorkOutline } from "react-icons/md"

const MobileMenuBar = () => {
    const pathName = usePathname();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                    <Link href="/dashboard" className="flex items-center gap-4 font-semibold">
                        <Image src="/logo/logo3.png" alt="SheCanCODE Logo" width={60} height={60} />
                        <span className="text-sky-700">Web Manager</span>
                    </Link>
                    <Link
                        href="/dashboard"
                        className={cn(pathName === "/dashboard" ? "bg-sky-100" : "", "flex items-center gap-3 rounded-lg px-3 py-2 text-sky-800 transition-all hover:text-sky-800")}
                    >
                        <Home className="h-4 w-4" />
                        Dashboard
                    </Link>
                    <Link
                        href="/dashboard/users"
                        className={cn(pathName === "/dashboard/users" ? "bg-sky-100" : "", "flex items-center gap-3 rounded-lg px-3 py-2 text-sky-800 transition-all hover:text-sky-800")}
                    >
                        <Users className="h-4 w-4" />
                        Users{" "}
                    </Link>
                    <Link
                        href="/dashboard/courses"
                        className={cn(pathName === "/dashboard/courses" ? "bg-sky-100" : "", "flex items-center gap-3 rounded-lg px-3 py-2 text-sky-800 transition-all hover:text-sky-800")}
                    >
                        <ShoppingCart className="h-4 w-4" />
                        Courses{" "}
                    </Link>
                    <Link
                        href="/dashboard/jobs"
                        className={cn(pathName === "/dashboard/jobs" ? "bg-sky-100" : "", "flex items-center gap-3 rounded-lg px-3 py-2 text-sky-800 transition-all hover:text-sky-800")}
                    >
                        <MdWorkOutline className="h-4 w-4" />
                        Jobs
                    </Link>
                    <Link
                        href="/dashboard/blog"
                        className={cn(pathName === "/dashboard/blog" ? "bg-sky-100" : "", "flex items-center gap-3 rounded-lg px-3 py-2 text-sky-800 transition-all hover:text-sky-800")}
                    >
                        <Newspaper className="h-4 w-4" />
                        Blog
                    </Link>
                    <Link
                        href="/dashboard/pages"
                        className={cn(pathName === "/dashboard/pages" ? "bg-sky-100" : "", "flex items-center gap-3 rounded-lg px-3 py-2 text-sky-800 transition-all hover:text-sky-800")}
                    >
                        <Paperclip className="h-4 w-4" />
                        Pages
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenuBar