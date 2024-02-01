"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const DashboardSidePanel = () => {
  const router = useRouter();
  const path = usePathname()
    .split("/")
    .filter((p) => p !== "")
    .pop();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex bg-gray-100">
        {/* Sidebar */}
        <aside
          className={`bg-gray-800 text-white ${
            isSidebarOpen ? "w-56" : "w-28"
          } transition-all`}
        >
          <div className="text-center mb-5 mt-4">
            <button
              className="p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-all"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? (
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 10 16"
                >
                  <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 10 16"
                >
                  <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
                </svg>
              )}
            </button>
          </div>

          <nav className="flex flex-col items-start">
            <button
              className={`w-full py-2 ${
                path === "dashboard" ? "bg-gray-700" : ""
              } hover:bg-gray-600 transition-all focus:outline-none focus:bg-gray-700 truncate`}
              onClick={() => router.push("/dashboard")}
            >
              Dashboard
            </button>

            <button
              className={`w-full py-2 ${
                path === "analytics" ? "bg-gray-700" : ""
              } hover:bg-gray-600 transition-all focus:outline-none focus:bg-gray-700 truncate`}
              onClick={() => router.push("/dashboard/analytics")}
            >
              Analytics
            </button>

            <button
              className={`w-full py-2 ${
                path === "settings" ? "bg-gray-700" : ""
              } hover:bg-gray-600 transition-all focus:outline-none focus:bg-gray-700 truncate`}
              onClick={() => router.push("/dashboard/settings")}
            >
              Settings
            </button>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default DashboardSidePanel;
