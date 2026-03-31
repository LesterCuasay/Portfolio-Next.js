import "./globals.css";
import { Manrope, Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";

const manrope = Manrope({
  weights: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  weights: ["400"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Lester Cuasay Portfolio",
  description: "A portfolio website showcasing the projects and experience of Lester Cuasay, a web developer specializing in Responsive Design, SEO, and Web Development. Explore my work and experience in creating user-friendly websites and applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="flex flex-col lg:flex-row max-w-7xl mx-auto h-dvh">
        <div className="lg:w-[500px] py-10 px-5 lg:p-10">
          <Sidebar />
        </div>
        <main className="lg:flex-1 lg:overflow-y-auto no-scrollbar">{children}</main>
      </body>
    </html>
  );
}
