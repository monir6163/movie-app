import { Button } from "@/components/ui/button";
import Link from "next/link";

type MenuItemProps = {
  item: {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
    href: string;
  };
  pathname: string;
};
const SidebarMenu = ({ item, pathname }: MenuItemProps) => (
  <div>
    <Link href={item.href}>
      <Button
        variant="ghost"
        className={`w-full justify-start gap-2 p-2 hover:text-green-500 hover:bg-green-50 text-lg ${
          item.href === pathname ? "text-green-500 dark:text-green-500" : ""
        }`}
      >
        <item.icon className="h-5 w-5" />
        {item.label}
      </Button>
    </Link>
  </div>
);

export default SidebarMenu;
