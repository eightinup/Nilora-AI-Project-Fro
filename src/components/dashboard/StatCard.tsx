import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Panel } from "@/components/ui/Panel";

export function StatCard({
  label,
  value,
  helper,
  icon: Icon,
  accent,
}: {
  label: string;
  value: string;
  helper: string;
  icon: LucideIcon;
  accent: "emerald" | "cyan" | "amber" | "rose" | "zinc";
}) {
  const accents = {
    emerald: "bg-lime-300 text-zinc-950",
    cyan: "bg-cyan-300 text-zinc-950",
    amber: "bg-amber-300 text-zinc-950",
    rose: "bg-rose-300 text-zinc-950",
    zinc: "bg-[linear-gradient(135deg,#f4f4f5,#c084fc,#22d3ee)] text-zinc-950",
  };

  return (
    <Panel className="angled-panel p-5 transition hover:border-lime-300/40 hover:bg-cyan-300/10">
      <div className="flex items-start justify-between gap-4">
        <span className={`flex size-10 items-center justify-center rounded-md ${accents[accent]}`}>
          <Icon size={19} />
        </span>
        <span className="flex items-center gap-1 rounded-md border border-lime-300/25 bg-lime-300/10 px-2 py-1 text-xs font-medium text-lime-100">
          12.4%
          <ArrowUpRight size={13} />
        </span>
      </div>
      <p className="mt-5 text-sm text-cyan-200">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-zinc-50">{value}</p>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{helper}</p>
    </Panel>
  );
}
