"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import { useEffect } from "react";

export default function WithLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Ensure this only runs on the client-side
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent || navigator.vendor;
      const isFB = userAgent.includes("FBAN") || userAgent.includes("FBAV");

      if (isFB) {
        // message to user to open in browser if they are using the Facebook app. and then redirect them to the browser version of the site if they click ok
        const openInBrowser = confirm(
          "You are using the Facebook app. For a better experience, please open this link in your browser."
        );
        if (openInBrowser) {
          window.open("https://nextjs.org/");
        }
      }
    }
  }, []); // Empty array means this effect runs only once after component mounts
  return (
    <section>
      <div className="flex">
        <Sidebar />

        <div className="md:ml-40">
          <div className="bg-white md:min-h-screen dark:bg-[#262525] dark:text-white p-4">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
