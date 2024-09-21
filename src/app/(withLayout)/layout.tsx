"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import { useEffect, useState } from "react";

export default function WithLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showBrowserMessage, setShowBrowserMessage] = useState(false);

  useEffect(() => {
    // Ensure this only runs on the client-side
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent || navigator.vendor;
      const isFB = userAgent.includes("FBAN") || userAgent.includes("FBAV");

      if (isFB) {
        // Show a message to the user to manually open the link in their default browser
        setShowBrowserMessage(true);
      }
    }
  }, []);

  const handleOpenBrowser = () => {
    // Prompt user to manually open the link in their browser
    alert(
      "Please open this site in your default browser for the best experience. Long press the URL below to copy and paste it into your browser's address bar:\n\nhttps://nextjs.org/"
    );
  };
  return (
    <section>
      {showBrowserMessage && (
        <div
          style={{ padding: "10px", backgroundColor: "#ffcc00", color: "#000" }}
        >
          <p>
            You&rsquo;re using the Facebook app. For the best experience, open
            this link in your browser.
          </p>
          <button
            onClick={handleOpenBrowser}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Open in Browser
          </button>
        </div>
      )}
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
