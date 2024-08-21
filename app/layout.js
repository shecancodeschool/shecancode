import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

const metadata = {
  title: "Shecancode bootcamp",
  description: "Shecancode bootcamp is the most popular training center for girls",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-start">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
