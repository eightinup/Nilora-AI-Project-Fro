"use client";

import { useSyncExternalStore } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Panel } from "@/components/ui/Panel";
import type { UsageDailyPoint } from "@/types/usage";

const subscribe = () => () => undefined;
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function UsageChart({ data }: { data: UsageDailyPoint[] }) {
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  return (
    <Panel className="angled-panel p-5">
      <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-lg font-semibold text-zinc-50">Usage and recovery trend</h2>
          <p className="mt-1 text-sm text-zinc-400">SMS volume, AI replies, missed calls, and recovered leads.</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-zinc-400">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-sm bg-lime-300" />
            Recovered
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-sm bg-cyan-300" />
            AI replies
          </span>
        </div>
      </div>
      <div className="h-80 min-w-0">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <AreaChart data={data} margin={{ left: -24, right: 8, top: 10, bottom: 0 }}>
              <defs>
                <linearGradient id="recoveredFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#d9f99d" stopOpacity={0.46} />
                <stop offset="95%" stopColor="#d9f99d" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="aiFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.32} />
                  <stop offset="95%" stopColor="#67e8f9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#164e63" strokeDasharray="3 3" vertical={false} opacity={0.38} />
              <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fill: "#a5f3fc", fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: "#a5f3fc", fontSize: 12 }} />
              <Tooltip
                cursor={{ stroke: "#67e8f9" }}
                contentStyle={{
                  background: "#080814",
                  border: "1px solid rgba(34,211,238,0.28)",
                  borderRadius: 8,
                  color: "#f4f4f5",
                }}
              />
              <Area type="monotone" dataKey="aiReplies" stroke="#67e8f9" fill="url(#aiFill)" strokeWidth={2} />
              <Area type="monotone" dataKey="recovered" stroke="#d9f99d" fill="url(#recoveredFill)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full rounded-lg border border-cyan-300/20 bg-cyan-300/10" />
        )}
      </div>
    </Panel>
  );
}
