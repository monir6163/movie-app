"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import { useEffect } from "react";

export default function WithLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const openInBrowser = (target: string, browserScheme: string) => {
    const ifc = document.createElement("div");
    ifc.innerHTML = `<iframe src='${browserScheme}${target}' style='width:0;height:0;border:0; border:none;visibility: hidden;'></iframe>`;
    document.body.appendChild(ifc);
  };

  const isInApp = (appSpecificUserAgents: string[]) => {
    const userAgent = navigator.userAgent || navigator.vendor;
    for (let i = 0; i < appSpecificUserAgents.length; i++) {
      if (userAgent.indexOf(appSpecificUserAgents[i]) > -1) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    const tryOpenBrowser = () => {
      if (document.body) {
        if (isInApp(["FBAN", "FBAV"])) {
          openInBrowser(window.location.href, "googlechrome://navigate?url=");
        }
      } else {
        window.requestAnimationFrame(tryOpenBrowser);
      }
    };

    tryOpenBrowser();
  }, []); // empty dependency array ensures this runs once on component mount
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
