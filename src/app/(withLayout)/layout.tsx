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
        // Check if the user is using the Facebook in-app browser and display a notification
        const openInBrowser = window.confirm(
          "It looks like you're using the Facebook app. For a better experience, we recommend opening this link in your default browser. Would you like to open it now?"
        );

        if (openInBrowser) {
          // Open the site in the user's default browser
          window.location.href = "https://nextjs.org/";
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
