import { PhoneCall } from "lucide-react";
import { APP_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#07060f] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-cyan-300/20 pt-8 md:flex-row md:items-center">
        <div className="flex items-center gap-3 text-sm font-semibold text-zinc-50">
          <span className="flex size-9 items-center justify-center rounded-md border border-cyan-300/30 bg-[linear-gradient(135deg,#d9f99d,#22d3ee,#fb7185)] text-zinc-950"><PhoneCall size={18} /></span>
          {APP_NAME}
        </div>
        <p className="text-sm text-zinc-500">Frontend-only SaaS dashboard demo. Mock data only.</p>
      </div>
    </footer>
  );
}
