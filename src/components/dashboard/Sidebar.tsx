"use client";
import { Button } from "@/components/ui/button";
import { DollarSign, Heart, Home, LogOut, Menu, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ModeToggle } from "../theme/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import SidebarMenu from "./SidebarMenu";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Heart, label: "Manage Causes", href: "/dashboard/cause" },
  // { icon: Calendar, label: "Manage Events", href: "/dashboard/event" },
  { icon: Users, label: "Manage Users", href: "/dashboard/user" },
  { icon: DollarSign, label: "Manage Donations", href: "/dashboard/donation" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:min-h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 h-screen border-r flex-col">
        {/* Logo */}
        <div className="p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Admin</h1>
          <ModeToggle />
        </div>
        <nav className="my-8 px-2 flex flex-col justify-between h-full">
          {/* Menu Items */}
          <div>
            {menuItems.map((item, index) => (
              <SidebarMenu key={index} item={item} pathname={pathname} />
            ))}
          </div>
          <div>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 p-2 hover:bg-green-50 hover:text-green-500 text-lg"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden m-4">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="p-0 flex flex-col justify-center w-64 bg-white dark:bg-[#262525]"
        >
          <div className="p-4 flex items-center gap-4">
            <h1 className="text-xl font-bold dark:text-green-500">Movie App</h1>
            <ModeToggle />
          </div>
          <nav className="my-8 px-2 flex flex-col justify-between h-full">
            <div>
              {menuItems.map((item, index) => (
                <div onClick={() => setIsOpen(false)} key={index}>
                  <SidebarMenu item={item} pathname={pathname} />
                </div>
              ))}
            </div>
            <div>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 p-2 hover:bg-green-50 hover:text-green-500 text-lg"
              >
                <LogOut className="h-5 w-5" />
                Logout
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
