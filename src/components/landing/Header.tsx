import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-300/20 bg-[#07060f]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-zinc-50">
          <span className="flex size-9 items-center justify-center rounded-md border border-cyan-300/30 bg-[linear-gradient(135deg,#d9f99d,#22d3ee,#fb7185)] text-zinc-950"><PhoneCall size={18} /></span>
          {APP_NAME}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => <a key={item.href} href={item.href} className="text-sm text-zinc-300 transition hover:text-cyan-100">{item.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink href="/dashboard" variant="ghost" className="hidden sm:inline-flex">Dashboard</ButtonLink>
          <ButtonLink href="#pricing">See plans</ButtonLink>
        </div>
      </div>
    </header>
  );
}
