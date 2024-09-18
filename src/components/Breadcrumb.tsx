"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <section className="">
      <div>
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="hover:text-green-500 capitalize dark:text-green-700 dark:hover:text-green-500"
          >
            Home
          </Link>
          {pathSegments.map((segment, index) => (
            <div key={index} className="flex items-center space-x-2">
              <ChevronRight size={20} className="text-green-500" />
              {index === pathSegments.length - 1 ? (
                <span className="text-green-500 font-bold capitalize">
                  {segment}
                </span>
              ) : (
                <Link
                  href={`/${pathSegments.slice(0, index + 1).join("/")}`}
                  className="hover:text-green-500 dark:text-green-700 dark:hover:text-green-500 capitalize"
                >
                  {segment}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
