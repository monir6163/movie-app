"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";
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
        <div className="flex flex-col text-wrap text-center justify-center items-center h-screen">
          <div className="border p-2">
            <p className="text-xl">
              Please open the link in your default browser (Like: Chrome)
            </p>

            <p className="text-xl">Facebook in-app browser is not supported.</p>

            <p className="text-xl">Thank you!</p>
            <Image
              className="mt-5 object-cover rounded-lg"
              src={"/b.gif"}
              width={200}
              height={200}
              alt="movie-123"
            />
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
