import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils"
import { Toaster } from 'sonner'
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: {
    template: '%s | SheCanCODE Bootcamp',
    default: 'SheCanCODE Bootcamp',
  },
  description: 'Welcome to the leading and the most intense coding training program for women in Rwanda.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/logo1.png" type="image/png" />
        <meta name="keywords" content="SheCanCODE, SheCanCODE Bootcamp, SheCanCode, shecancode, bootcamp, Women in tech, Training bootcamp, IT, IT Bootcamp, Free bootcamp, Girls, Girls bootcamp in Rwanda, Igire Rwanda Organization" />
        <meta property="og:title" content="SheCanCODE Bootcamp" />
        <meta property="og:description" content="Welcome to the leading and the most intense coding training program for women in Rwanda." />
        <meta property="og:image" content="/F9.jpeg" />
      </head>
      <body className={cn("flex flex-col justify-start", fontSans.variable)}>
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
