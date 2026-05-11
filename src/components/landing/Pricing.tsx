import { Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

const plans = [
  { name: "Starter", price: "$149", description: "For a single local business testing missed-call recovery.", features: ["600 SMS credits", "1 assigned number", "AI qualification", "Basic usage reporting"] },
  { name: "Growth", price: "$299", description: "For service teams with steady call volume and booking workflows.", features: ["1,500 SMS credits", "3 assigned numbers", "Appointment capture", "Human takeover queue"], highlighted: true },
  { name: "Pro", price: "$499", description: "For multi-location operators and agencies managing clients.", features: ["2,500 SMS credits", "Unlimited mock businesses", "Advanced usage controls", "Priority review queue"] },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-cyan-300/20 bg-[#0d0712] px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><Badge tone="success">Pricing</Badge><h2 className="mt-4 text-3xl font-semibold text-zinc-50 md:text-4xl">Plans modeled for a frontend SaaS MVP.</h2></div><div className="mt-10 grid gap-4 lg:grid-cols-3">{plans.map((plan) => <article key={plan.name} className={`angled-panel border p-6 ${plan.highlighted ? "border-lime-300/40 bg-[linear-gradient(135deg,rgba(217,249,157,0.18),rgba(34,211,238,0.12))]" : "border-cyan-300/20 bg-white/10"}`}><div className="flex items-start justify-between gap-4"><div><h3 className="text-xl font-semibold text-zinc-50">{plan.name}</h3><p className="mt-2 text-sm leading-6 text-zinc-400">{plan.description}</p></div>{plan.highlighted ? <Badge tone="success">Popular</Badge> : null}</div><p className="mt-8 text-4xl font-semibold text-zinc-50">{plan.price}<span className="text-sm font-medium text-zinc-500"> /mo</span></p><div className="mt-6 space-y-3">{plan.features.map((feature) => <div key={feature} className="flex items-center gap-3 text-sm text-zinc-300"><Check className="text-lime-300" size={17} />{feature}</div>)}</div><ButtonLink href="/dashboard" variant={plan.highlighted ? "primary" : "secondary"} className="mt-8 w-full">Preview plan</ButtonLink></article>)}</div></div></section>
  );
}
