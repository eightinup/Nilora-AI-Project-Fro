import { Bell, Search, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function DashboardTopbar() {
  return (
    <header className="flex min-h-16 flex-col gap-3 border-b border-cyan-300/20 bg-[#080814]/90 px-4 py-3 backdrop-blur md:flex-row md:items-center md:justify-between lg:px-6">
      <div>
        <p className="text-sm text-cyan-200">Workspace</p>
        <h1 className="text-lg font-semibold text-zinc-50">Service Recovery HQ</h1>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
          <input
            className="h-10 w-full rounded-md border border-cyan-300/20 bg-cyan-300/10 pl-9 pr-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-lime-300/60 sm:w-72"
            placeholder="Search leads, businesses..."
          />
        </label>
        <Badge tone="success">
          <ShieldCheck size={14} />
          AI active
        </Badge>
        <button className="flex size-10 items-center justify-center rounded-md border border-rose-300/25 bg-rose-300/10 text-rose-100 transition hover:bg-rose-300/20">
          <Bell size={17} />
          <span className="sr-only">Notifications</span>
        </button>
      </div>
    </header>
  );
}
