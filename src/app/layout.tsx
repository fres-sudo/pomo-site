import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
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
    <html lang="en">
      <body className={clsx(dmSans.className, "antialiased bg-black")}>{children}</body>
    </html>
  );
}
