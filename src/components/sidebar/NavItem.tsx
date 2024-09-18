"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

export default function NavItem({ label, path, icon }: NavItemProps) {
  const pathname = usePathname();
  // Determine if the current path is active
  const isActive = pathname === path || pathname.startsWith(path + "/");

  return (
    <li className="mt-8 mb-5">
      <Link
        href={path}
        className={`flex items-center text-base space-x-1 hover:text-green-500 ${
          isActive ? "text-green-500 dark:text-green-500" : ""
        }`}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
}
