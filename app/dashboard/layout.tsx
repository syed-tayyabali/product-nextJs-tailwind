import DashboardSidePanel from "@/components/DashboardSidePanel/page";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Side Panel */}
      <DashboardSidePanel />

      {/* Main Content */}
      <div className="flex-1 p-8 text-black">{children}</div>
    </div>
  );
};

export default DashboardLayout;
