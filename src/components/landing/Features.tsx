import { Bot, CalendarCheck, Gauge, MessageSquareText, PhoneMissed, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const features = [
  { title: "Missed-call detection", description: "Turns unanswered calls into immediate SMS conversations with the business context already attached.", icon: PhoneMissed },
  { title: "AI qualification", description: "Collects job type, urgency, service address, availability, and customer intent without a form.", icon: Bot },
  { title: "SMS inbox", description: "Gives operators a familiar thread view for AI-led replies, customer context, and manual takeover.", icon: MessageSquareText },
  { title: "Appointment capture", description: "Surfaces requested time windows and high-intent jobs so teams can confirm faster.", icon: CalendarCheck },
  { title: "Usage controls", description: "Tracks SMS volume, AI reply counts, call events, and monthly thresholds for every business.", icon: Gauge },
  { title: "Operational safeguards", description: "Flags conversations that need a human, pricing approval, or account attention.", icon: ShieldCheck },
];

export function Features() {
  return (
    <section id="features" className="signal-grid border-b border-cyan-300/20 bg-[#090713] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Badge tone="success">Features</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-zinc-50 md:text-4xl">Built around the moments local service businesses usually lose.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="angled-panel border border-cyan-300/20 bg-white/10 p-5 transition hover:border-lime-300/50 hover:bg-cyan-300/10">
              <feature.icon className="text-lime-300" size={22} />
              <h3 className="mt-5 text-lg font-semibold text-zinc-50">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
