import { Film, Home } from "lucide-react";
import { ModeToggle } from "../theme/theme-toggle";
import NavItem from "./NavItem";

export default function Sidebar() {
  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={20} />,
      current: false,
    },
    {
      name: "Movies",
      path: "/movies",
      icon: <Film size={20} />,
      current: false,
    },
  ];
  return (
    <nav className="hidden md:block w-40 dark:bg-[#171615 ] h-screen fixed shadow-xl border-r-2 p-5 space-y-6 dark:border-slate-300">
      <h1 className="text-xl font-bold dark:text-green-500">Movie App</h1>
      <ul>
        {navItems?.map((item, i) => (
          <NavItem
            key={i}
            path={item.path}
            label={item.name}
            icon={item.icon}
          />
        ))}

        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}
