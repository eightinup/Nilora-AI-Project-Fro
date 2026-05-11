import { Badge } from "@/components/ui/Badge";

const steps = [
  { label: "01", title: "Customer call is missed", description: "Nilora receives a mock missed-call event and identifies the business, caller, and assigned number." },
  { label: "02", title: "AI sends an SMS", description: "The customer receives a service-specific follow-up asking what they need and how urgent it is." },
  { label: "03", title: "Details are captured", description: "The thread collects job type, address, availability, and appointment intent for the operator." },
  { label: "04", title: "Team confirms the job", description: "Qualified requests appear in the dashboard with context, status, and next-step controls." },
];

export function HowItWorks() {
  return (
    <section id="workflow" className="border-b border-cyan-300/20 bg-[#060c12] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><Badge tone="info">Workflow</Badge><h2 className="mt-4 max-w-2xl text-3xl font-semibold text-zinc-50 md:text-4xl">From missed call to qualified appointment request.</h2></div><p className="max-w-md text-sm leading-6 text-zinc-400">The demo uses local mock events, but the product flow mirrors a real local-service recovery workflow.</p></div>
        <div className="grid gap-4 lg:grid-cols-4">{steps.map((step) => <article key={step.label} className="angled-panel border border-cyan-300/20 bg-white/10 p-5"><span className="text-sm font-semibold text-cyan-200">{step.label}</span><h3 className="mt-5 text-lg font-semibold text-zinc-50">{step.title}</h3><p className="mt-3 text-sm leading-6 text-zinc-400">{step.description}</p></article>)}</div>
      </div>
    </section>
  );
}
