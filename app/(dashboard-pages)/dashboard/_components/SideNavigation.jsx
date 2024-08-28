"use client";

import Link from "next/link"
import {
  Home,
  Newspaper,
  Paperclip,
  ShoppingCart,
  Users
} from "lucide-react";
import { MdWorkOutline } from "react-icons/md";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SideNavigation = () => {
  const pathName = usePathname();

  return (
    <div className="flex-1">
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
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
    </div>
  )
}

export default SideNavigation