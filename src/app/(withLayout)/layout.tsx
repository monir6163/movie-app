"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import { useEffect, useState } from "react";

const useFacebookInAppBrowser = () => {
  const [isFacebookBrowser, setIsFacebookBrowser] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent || navigator.vendor;
      if (userAgent.includes("FBAN") || userAgent.includes("FBAV")) {
        setIsFacebookBrowser(true);
      }
    }
  }, []);

  return isFacebookBrowser;
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
        <div className="open-browser-banner">
          <p>You are viewing this site in Facebook in-app browser.</p>
          <a href={window.location.href} target="_blank">
            Open in Default Browser
          </a>
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
