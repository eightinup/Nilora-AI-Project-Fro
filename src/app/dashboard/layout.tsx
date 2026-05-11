import type { ReactNode } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardTopbar } from "@/components/dashboard/DashboardTopbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="electric-page min-h-screen text-zinc-50 lg:flex">
      <DashboardSidebar />
      <div className="min-w-0 flex-1">
        <DashboardTopbar />
        <main className="px-4 py-6 lg:px-6">{children}</main>
      </div>
    </div>
  );
}
