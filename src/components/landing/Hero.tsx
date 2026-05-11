import { ArrowRight, CalendarCheck, CheckCircle2, MapPin, MessageSquareText, PhoneMissed, Radio, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

const signalSteps = [
  { label: "Call missed", value: "00:00", color: "bg-rose-300", icon: PhoneMissed },
  { label: "AI SMS", value: "00:51", color: "bg-cyan-300", icon: MessageSquareText },
  { label: "Job qualified", value: "04:18", color: "bg-lime-300", icon: MapPin },
  { label: "Booking intent", value: "08:42", color: "bg-amber-300", icon: CalendarCheck },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-cyan-300/20 bg-[#07060f]">
      <div className="signal-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="neon-divider absolute left-0 top-0 h-px w-full" aria-hidden="true" />
      <div aria-hidden="true" className="absolute inset-x-0 top-20 h-24 bg-[repeating-linear-gradient(100deg,transparent_0_38px,rgba(34,211,238,0.08)_39px_41px,transparent_42px_78px)]" />
      <div aria-hidden="true" className="absolute inset-0">
        <div className="holo-panel angled-panel absolute right-4 top-24 hidden w-[390px] border border-cyan-300/25 p-4 shadow-2xl shadow-cyan-500/20 md:block lg:right-[8%]">
          <div className="mb-5 flex items-center justify-between"><div><p className="text-xs font-semibold uppercase text-cyan-100">Live SMS intercept</p><p className="mt-1 text-xs text-zinc-400">North Valley Plumbing</p></div><span className="flex size-10 items-center justify-center rounded-md bg-lime-300 text-zinc-950"><Zap size={19} /></span></div>
          <div className="space-y-3"><div className="ml-auto max-w-[82%] rounded-lg bg-[linear-gradient(135deg,#d9f99d,#22d3ee)] px-3 py-2 text-xs font-medium leading-5 text-zinc-950">Sorry we missed you. What issue can we help with today?</div><div className="max-w-[82%] rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-xs leading-5 text-zinc-100">Water heater is leaking into the garage. Need someone today.</div><div className="ml-auto max-w-[86%] rounded-lg bg-rose-300 px-3 py-2 text-xs font-medium leading-5 text-zinc-950">Got it. Can a tech arrive between 11 AM and 1 PM?</div></div>
        </div>
        <div className="angled-panel absolute bottom-14 left-[7%] hidden w-72 border border-rose-300/25 bg-rose-300/10 p-4 shadow-2xl shadow-rose-500/20 lg:block"><div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-md bg-rose-300 text-zinc-950"><PhoneMissed size={20} /></span><div><p className="text-sm font-semibold text-zinc-50">Missed call recovered</p><p className="text-xs text-zinc-400">AI captured urgency, address, and appointment intent.</p></div></div></div>
      </div>
      <div className="relative mx-auto flex min-h-[660px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8"><div className="max-w-3xl"><Badge tone="info" className="mb-5"><Radio size={14} />Bright missed-call recovery cockpit</Badge><h1 className="holo-text max-w-3xl text-6xl font-semibold leading-[1.02] md:text-7xl">Nilora AI</h1><p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-200">An AI-powered SMS layer that turns silent missed calls into qualified jobs, urgent callbacks, and appointment requests for local service teams.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href="/dashboard" className="h-11 px-5">View dashboard<ArrowRight size={17} /></ButtonLink><ButtonLink href="#features" variant="secondary" className="h-11 px-5">Explore features</ButtonLink></div><div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">{["51 sec median reply", "91% AI response rate", "140 appointment requests"].map((item) => <div key={item} className="flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm text-zinc-100"><CheckCircle2 className="text-lime-300" size={17} />{item}</div>)}</div><div className="mt-8 grid max-w-4xl gap-2 sm:grid-cols-4">{signalSteps.map((step) => <div key={step.label} className="angled-panel border border-white/10 bg-white/10 p-3"><div className="flex items-center justify-between gap-3"><span className={`flex size-8 items-center justify-center rounded-md ${step.color} text-zinc-950`}><step.icon size={16} /></span><span className="text-xs font-semibold text-zinc-300">{step.value}</span></div><p className="mt-3 text-xs font-medium text-zinc-100">{step.label}</p></div>)}</div></div></div>
    </section>
  );
}
