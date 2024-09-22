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
export default function WithLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isFacebookBrowser = useFacebookInAppBrowser();
  const handleOpenInBrowser = () => {
    window.open(window.location.href, "_system");
  };
  return (
    <section>
      {isFacebookBrowser ? (
        <div
          className="open-in-browser-banner"
          style={{
            padding: "10px",
            background: "#ffcc00",
            textAlign: "center",
          }}
        >
          <p>You re viewing this site in an in-app browser.</p>
          <p>
            For the best experience,{" "}
            <b>click here to open in your default browser</b>.
          </p>
          <Button onClick={handleOpenInBrowser}>Open in Default Browser</Button>
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
