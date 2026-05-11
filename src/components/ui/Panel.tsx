import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Panel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-lg border border-cyan-300/20 bg-white/10 shadow-2xl shadow-cyan-950/20",
        className,
      )}
    >
      {children}
    </section>
  );
}
