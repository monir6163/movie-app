import { Film, Home } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../theme/theme-toggle";

export default function Sidebar() {
  return (
    <nav className="hidden md:block w-40 dark:bg-[#171615 ] min-h-screen shadow-xl border-r-2 p-5 space-y-6">
      <h1 className="text-xl font-bold dark:text-green-500">Movie App</h1>
      <ul>
        <li className="mt-8 mb-4">
          <Link
            href="/"
            className="flex items-center text-base space-x-1 hover:text-green-500"
          >
            <Home size={24} />
            <span>Home</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link
            href="/movies"
            className="flex items-center text-base space-x-1 hover:text-green-500"
          >
            <Film size={24} />
            <span>Movies</span>
          </Link>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}
