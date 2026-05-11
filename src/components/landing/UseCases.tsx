import { Badge } from "@/components/ui/Badge";

const useCases = ["Plumbers recovering emergency leak calls after hours", "Electricians qualifying panel, outlet, and safety requests", "HVAC teams prioritizing no-heat and no-cool calls", "Cleaners capturing move-out and recurring service requests", "Repair shops collecting appliance model and symptom details", "Garage door companies separating urgent stuck-door calls"];

export function UseCases() {
  return (
    <section id="use-cases" className="border-b border-cyan-300/20 bg-[#090713] px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><Badge tone="warning">Use cases</Badge><h2 className="mt-4 text-3xl font-semibold text-zinc-50 md:text-4xl">Designed for trades and service teams where speed wins the job.</h2><p className="mt-5 text-sm leading-6 text-zinc-400">Nilora is positioned for businesses that lose revenue when callers hang up and book the next available competitor.</p></div><div className="grid gap-3 sm:grid-cols-2">{useCases.map((item) => <div key={item} className="angled-panel border border-rose-300/20 bg-rose-300/10 p-4 text-sm leading-6 text-zinc-100">{item}</div>)}</div></div></section>
  );
}
