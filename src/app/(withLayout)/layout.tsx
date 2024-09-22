"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import { Button } from "@/components/ui/button";
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

const handleCopyCurrentUrl = () => {
  if (typeof window !== "undefined") {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  }
};

export default function WithLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isFacebookBrowser = useFacebookInAppBrowser();
  return (
    <section>
      {isFacebookBrowser ? (
        <div className="flex flex-col text-wrap text-center justify-center items-center h-screen">
          <div className="border p-2">
            <p className="text-2xl">
              Please open the link in your default browser.
            </p>

            <p className="text-2xl">
              Facebook in-app browser is not supported.
            </p>

            <p className="text-2xl">Thank you!</p>
            <Button onClick={handleCopyCurrentUrl} className="mt-5">
              Copy Link
            </Button>
          </div>
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
