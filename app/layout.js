import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="keywords" content="SheCanCODE, SheCanCODE Bootcamp, SheCanCode, shecancode, bootcamp, Women in tech, Training bootcamp, IT, IT Bootcamp, Free bootcamp, Girls, Girls bootcamp in Rwanda, Igire Rwanda Organization" />
        <meta property="og:title" content="SheCanCODE Bootcamp" />
        <meta property="og:description" content="Welcome to the leading and the most intense coding training program for women in Rwanda." />
        <meta property="og:image" content="/F9.jpeg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
      </head>
      <body className="flex flex-col justify-start">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
