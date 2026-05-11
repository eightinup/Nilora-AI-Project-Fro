import { Activity, Bot, CalendarCheck, MessageSquareText, PhoneCall } from "lucide-react";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { StatCard } from "@/components/dashboard/StatCard";
import { UsageChart } from "@/components/dashboard/UsageChart";
import { Badge } from "@/components/ui/Badge";
import { Panel } from "@/components/ui/Panel";
import { appointments } from "@/data/appointments";
import { businesses } from "@/data/businesses";
import { conversations } from "@/data/conversations";
import { recentActivity, usageDailySeries, usageSummary } from "@/data/usage";
import { formatNumber, formatPercent } from "@/lib/utils";

export default function DashboardPage() {
  const smsUsagePercent = Math.round((usageSummary.smsUsed / usageSummary.smsLimit) * 100);
  const activeBusinesses = businesses.filter((business) => business.status === "active").length;
  const highIntentConversations = conversations.filter((conversation) => conversation.appointmentIntent);

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <Badge tone="info">Live overview</Badge>
          <h2 className="holo-text mt-4 text-3xl font-semibold md:text-4xl">Missed-call recovery dashboard</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
            Track how many missed calls Nilora AI turns into qualified SMS conversations and appointment requests.
          </p>
        </div>
        <Panel className="angled-panel px-4 py-3">
          <p className="text-sm text-cyan-200">Active businesses</p>
          <p className="mt-1 text-2xl font-semibold text-zinc-50">{activeBusinesses} of {businesses.length}</p>
        </Panel>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <StatCard label="Total conversations" value={formatNumber(usageSummary.totalConversations)} helper="Missed-call SMS threads handled this month." icon={MessageSquareText} accent="emerald" />
        <StatCard label="Missed calls recovered" value={formatNumber(usageSummary.missedCallsRecovered)} helper="Leads that received a follow-up and replied." icon={PhoneCall} accent="cyan" />
        <StatCard label="Appointment requests" value={formatNumber(usageSummary.appointmentRequests)} helper="Customers who asked for a booking window." icon={CalendarCheck} accent="amber" />
        <StatCard label="SMS usage" value={`${formatNumber(usageSummary.smsUsed)} / ${formatNumber(usageSummary.smsLimit)}`} helper={`${smsUsagePercent}% of the monthly mock allowance used.`} icon={Activity} accent="rose" />
        <StatCard label="AI response rate" value={formatPercent(usageSummary.aiResponseRate)} helper={`${formatNumber(usageSummary.aiReplies)} AI replies sent across active accounts.`} icon={Bot} accent="zinc" />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_0.85fr]">
        <UsageChart data={usageDailySeries} />
        <RecentActivity items={recentActivity} />
      </section>

      <Panel className="angled-panel overflow-hidden">
        <div className="flex flex-col justify-between gap-3 border-b border-cyan-300/20 p-5 md:flex-row md:items-center">
          <div>
            <h2 className="text-lg font-semibold text-zinc-50">High-intent conversations</h2>
            <p className="mt-1 text-sm text-zinc-500">SMS threads where the customer signaled appointment intent.</p>
          </div>
          <Badge tone="info">{highIntentConversations.length} ready for review</Badge>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="border-b border-cyan-300/20 bg-cyan-300/10 text-xs uppercase text-cyan-100">
              <tr>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Business</th>
                <th className="px-5 py-3 font-medium">Job type</th>
                <th className="px-5 py-3 font-medium">Urgency</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyan-300/20">
              {highIntentConversations.map((conversation) => {
                const business = businesses.find((item) => item.id === conversation.businessId);
                const appointment = appointments.find((item) => item.customerPhone === conversation.customer.phone);

                return (
                  <tr key={conversation.id} className="transition hover:bg-cyan-300/10">
                    <td className="px-5 py-4">
                      <p className="font-medium text-zinc-100">{conversation.customer.name}</p>
                      <p className="mt-1 text-xs text-zinc-500">{conversation.customer.phone}</p>
                    </td>
                    <td className="px-5 py-4 text-zinc-300">{business?.name ?? "Unassigned"}</td>
                    <td className="px-5 py-4 text-zinc-300">{conversation.jobType}</td>
                    <td className="px-5 py-4">
                      <Badge tone={conversation.urgency === "emergency" ? "danger" : conversation.urgency === "medium" ? "warning" : "info"}>{conversation.urgency}</Badge>
                    </td>
                    <td className="px-5 py-4">
                      <Badge tone={appointment?.status === "confirmed" ? "success" : "neutral"}>{appointment?.status ?? conversation.status}</Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}
