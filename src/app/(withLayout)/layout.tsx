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

        <div className="md:ml-40">
          <div className="bg-white md:min-h-screen dark:bg-[#262525] dark:text-white p-4">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
