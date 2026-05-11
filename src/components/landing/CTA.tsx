import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="border-b border-cyan-300/20 bg-[linear-gradient(100deg,#101307,#06111a_48%,#160713)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-semibold text-zinc-50">See the recovery dashboard in action.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
            Phase 1 includes the polished landing page, dashboard shell, local data model, and overview analytics.
          </p>
        </div>
        <ButtonLink href="/dashboard" className="h-11 px-5">
          Open dashboard
          <ArrowRight size={17} />
        </ButtonLink>
      </div>
    </section>
  );
}
