"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlertTriangle,
  BarChart3,
  Building2,
  CalendarDays,
  LayoutDashboard,
  MessageSquareText,
  PhoneCall,
  Settings,
} from "lucide-react";
import { DASHBOARD_NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const icons = {
  Overview: LayoutDashboard,
  Businesses: Building2,
  Conversations: MessageSquareText,
  Appointments: CalendarDays,
  Usage: BarChart3,
  Errors: AlertTriangle,
  Settings,
};

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="signal-grid border-cyan-300/20 bg-[#07060f]/95 lg:min-h-screen lg:w-72 lg:border-r">
      <div className="flex h-16 items-center gap-3 border-b border-cyan-300/20 px-4 lg:px-6">
        <span className="flex size-9 items-center justify-center rounded-md border border-cyan-300/30 bg-[linear-gradient(135deg,#d9f99d,#22d3ee,#fb7185)] text-zinc-950">
          <PhoneCall size={18} />
        </span>
        <div>
          <p className="text-sm font-semibold text-zinc-50">Nilora AI</p>
          <p className="text-xs text-cyan-200">Operator console</p>
        </div>
      </div>

      <nav className="flex gap-2 overflow-x-auto border-b border-cyan-300/20 p-3 lg:block lg:space-y-1 lg:border-b-0 lg:p-4">
        {DASHBOARD_NAV_ITEMS.map((item) => {
          const Icon = icons[item.label];
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-w-max items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition",
                active
                  ? "bg-[linear-gradient(135deg,#d9f99d,#22d3ee)] text-zinc-950 shadow-lg shadow-cyan-500/20"
                  : "text-zinc-300 hover:bg-cyan-300/10 hover:text-cyan-50",
              )}
            >
              <Icon size={17} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
