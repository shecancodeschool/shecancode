import "@/styles/globals.css";
import { Toaster } from "sonner";

export const metadata = {
  title: {
    template: '%s | SheCanCODE Bootcamp',
    default: 'SheCanCODE Bootcamp Dashboard',
  }
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
      <body className="flex flex-col justify-start">
        <Toaster position="top-right"/>
        <div className="flex justify-center items-center h-screen w-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
