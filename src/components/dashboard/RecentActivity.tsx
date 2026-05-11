import { AlertCircle, CheckCircle2, Info, TriangleAlert } from "lucide-react";
import { Panel } from "@/components/ui/Panel";
import type { RecentActivityItem } from "@/types/usage";

const toneIcon = {
  success: CheckCircle2,
  warning: TriangleAlert,
  info: Info,
  danger: AlertCircle,
};

const toneClasses = {
  success: "bg-lime-300/10 text-lime-100",
  warning: "bg-amber-300/10 text-amber-100",
  info: "bg-cyan-300/10 text-cyan-100",
  danger: "bg-rose-300/10 text-rose-100",
};

export function RecentActivity({ items }: { items: RecentActivityItem[] }) {
  return (
    <Panel className="angled-panel p-5">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-zinc-50">Recent activity</h2>
        <p className="mt-1 text-sm text-zinc-500">High-signal events from today&apos;s missed-call workflow.</p>
      </div>
      <div className="space-y-4">
        {items.map((item) => {
          const Icon = toneIcon[item.tone];

          return (
            <div key={item.id} className="flex gap-3 border-b border-cyan-300/20 pb-4 last:border-0 last:pb-0">
              <span className={`flex size-9 shrink-0 items-center justify-center rounded-md ${toneClasses[item.tone]}`}>
                <Icon size={17} />
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="font-medium text-zinc-100">{item.title}</p>
                  <span className="text-xs text-zinc-600">{item.timestamp}</span>
                </div>
                <p className="mt-1 text-sm leading-6 text-zinc-400">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
