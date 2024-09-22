"use client";
import Sidebar from "@/components/sidebar/Sidebar";
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
        <div className="flex flex-col justify-center items-center h-screen">
          <p className="text-2xl">
            Please open the link in your default browser.
          </p>

          <p className="text-2xl">Facebook in-app browser is not supported.</p>

          <p className="text-2xl">Thank you!</p>

          <a href="googlechrome://movie-app-123.vercel.app/">Open in Chrome</a>
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
