import "@/styles/globals.css";
import Link from "next/link";
import {
    Bell,
    CircleUser,
    Package2,
    Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import SideNavigation from "./_components/SideNavigation";
import MobileMenuBar from "./_components/MobileMenuBar";
import Image from "next/image";
import { Toaster } from "sonner";

export const metadata = {
    title: "SheCanCODE Dashboard",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-background font-sans antialiased">
                <Toaster />
                <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                    <div className="hidden border-r bg-muted/40 md:block">
                        {/* Side Bar  */}
                        <div className="flex h-full max-h-screen flex-col gap-2">
                            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                                <Link href="/dashboard" className="flex items-center gap-4 font-semibold">
                                    <Image src="/logo/logo3.png" alt="SheCanCODE Logo" width={60} height={60} />
                                    <span className="text-sky-700">Web Manager</span>
                                </Link>
                            </div>
                            {/* Side Navigation Bar   */}
                            <SideNavigation />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                            <MobileMenuBar />
                            <div className="w-full flex-1">
                                <form>
                                    <div className="relative">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            type="search"
                                            placeholder="Search products..."
                                            className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                        />
                                    </div>
                                </form>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="secondary" size="icon" className="rounded-full">
                                        <CircleUser className="h-5 w-5" />
                                        <span className="sr-only">Toggle user menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                    <DropdownMenuItem>Support</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </header>
                        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                            {children}
                        </main>
                    </div>
                </div>
            </body>
        </html>
    );
}
