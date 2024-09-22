"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import { useEffect, useState } from "react";

const useFacebookInAppBrowser = () => {
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent || navigator.vendor;

      // Detect if the user is inside the Facebook, Instagram, or any in-app browser
      if (
        userAgent.includes("FBAN") ||
        userAgent.includes("FBAV") ||
        userAgent.includes("Instagram")
      ) {
        setIsInAppBrowser(true);
      }
    }
  }, []);

  return isInAppBrowser;
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
          <a
            href={window.location.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline bg-white px-2 py-1 rounded"
          >
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
