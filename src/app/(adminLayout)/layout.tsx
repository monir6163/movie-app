import Sidebar from "@/components/dashboard/Sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen w-full  m-0 p-0 overflow-x-hidden">
        <div>
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="flex-1 w-full">
          <div className="bg-white min-h-screen dark:bg-[#262525] dark:text-white p-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
