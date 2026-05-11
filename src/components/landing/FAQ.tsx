import { Badge } from "@/components/ui/Badge";

const faqs = [
  { question: "Does this demo send real SMS messages?", answer: "No. Phase 1 is frontend-only and uses local mock data only." },
  { question: "Is there real AI connected behind the interface?", answer: "No. The AI behavior is represented through mocked conversations and dashboard states." },
  { question: "Who is Nilora AI for?", answer: "Local service businesses that need fast follow-up when phone calls are missed." },
  { question: "What will be added after Phase 1?", answer: "The business manager, SMS inbox, appointment queue, settings, usage, and error views are next." },
];

export function FAQ() {
  return (
    <section id="faq" className="border-b border-cyan-300/20 bg-[#07060f] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Badge tone="info">FAQ</Badge>
        <h2 className="mt-4 text-3xl font-semibold text-zinc-50 md:text-4xl">Common questions</h2>
        <div className="mt-10 divide-y divide-cyan-300/20 rounded-lg border border-cyan-300/20 bg-white/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5">
              <summary className="cursor-pointer list-none text-base font-semibold text-zinc-50">{faq.question}</summary>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
