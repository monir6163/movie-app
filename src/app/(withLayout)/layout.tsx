"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

function useFacebookInAppBrowser() {
  const [isFacebookBrowser, setIsFacebookBrowser] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const ua = navigator.userAgent || navigator.vendor;
      if (ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1) {
        setIsFacebookBrowser(true);
      }
    }
  }, []);
  return isFacebookBrowser;
}
export default function WithLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isFacebookBrowser = useFacebookInAppBrowser();
  return (
    <section>
      {isFacebookBrowser ? (
        <div className="flex justify-center items-center h-screen">
          <p className="text-2xl">
            Please open the link in your default browser.
          </p>

          <p className="text-2xl">Facebook in-app browser is not supported.</p>

          <p className="text-2xl">Thank you!</p>

          <Link href="/" target="_blank" rel="noreferrer noopener">
            <Button className="mt-5">Go back to home</Button>
          </Link>
        </div>
      ) : (
        <div className="flex">
          <Sidebar />
          <div className="md:ml-40">
            <div className="bg-white md:min-h-screen dark:bg-[#262525] dark:text-white p-4">
              {children}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
