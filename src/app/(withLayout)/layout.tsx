import Sidebar from "@/components/sidebar/Sidebar";

export default function WithLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="flex">
        <Sidebar />
        <div className="dark:bg-[#262525] w-full">
          <div className="flex-1">
            <div className="bg-white dark:bg-[#262525] dark:text-white rounded-lg p-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
