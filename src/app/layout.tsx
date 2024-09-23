import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const dmSans = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pomo Focus",
  description: "Your pomodoro buddy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={clsx(dmSans.className, "antialiased bg-black ")}>
        <Navbar />
        {children}
        <div className="place-items-end justify-center text-xs md:text-sm gap-4 md:gap-12 m-6">
          <Footer />
        </div>
      </body>
    </html>
  );
}
