
import React from "react";
import { Inter } from 'next/font/google'
import Navigation from "@/components/navigation";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Homeindex() {

  return (
    <>
    <main className={`${inter.variable}  flex min-h-screen flex-col w-[100%]`}>
      <Navigation/>
    </main>
    </>
  );
}
