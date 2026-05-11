import type { RecentActivityItem, UsageDailyPoint, UsageEvent, UsageSummary } from "@/types/usage";

export const usageSummary: UsageSummary = {
  totalConversations: 342,
  missedCallsRecovered: 342,
  appointmentRequests: 140,
  smsUsed: 4709,
  smsLimit: 6700,
  aiReplies: 1268,
  aiResponseRate: 91,
};

export const usageDailySeries: UsageDailyPoint[] = [
  { date: "May 5", sms: 412, aiReplies: 108, missedCalls: 49, recovered: 42 },
  { date: "May 6", sms: 538, aiReplies: 129, missedCalls: 61, recovered: 55 },
  { date: "May 7", sms: 477, aiReplies: 117, missedCalls: 54, recovered: 49 },
  { date: "May 8", sms: 691, aiReplies: 162, missedCalls: 73, recovered: 66 },
  { date: "May 9", sms: 603, aiReplies: 148, missedCalls: 68, recovered: 59 },
  { date: "May 10", sms: 744, aiReplies: 183, missedCalls: 81, recovered: 74 },
  { date: "May 11", sms: 824, aiReplies: 214, missedCalls: 93, recovered: 86 },
];

export const usageEvents: UsageEvent[] = [
  {
    id: "evt_001",
    businessId: "biz_001",
    type: "appointment_request",
    description: "Emergency plumbing appointment captured by AI",
    quantity: 1,
    createdAt: "2026-05-11T08:56:00",
  },
  {
    id: "evt_002",
    businessId: "biz_002",
    type: "ai_reply",
    description: "AI collected job type and address from missed-call lead",
    quantity: 3,
    createdAt: "2026-05-11T09:24:00",
  },
  {
    id: "evt_003",
    businessId: "biz_004",
    type: "sms_sent",
    description: "SMS usage alert sent to owner after 90% monthly threshold",
    quantity: 1,
    createdAt: "2026-05-10T16:12:00",
  },
  {
    id: "evt_004",
    businessId: "biz_003",
    type: "missed_call",
    description: "High-intent HVAC lead flagged for human review",
    quantity: 1,
    createdAt: "2026-05-10T17:44:00",
  },
];

export const recentActivity: RecentActivityItem[] = [
  {
    id: "act_001",
    title: "Appointment request recovered",
    description: "North Valley Plumbing booked a same-day water heater visit from a missed call.",
    timestamp: "8:56 AM",
    tone: "success",
  },
  {
    id: "act_002",
    title: "AI qualified a new electrical lead",
    description: "BrightSpark Electric captured job type, address, and inspection intent.",
    timestamp: "9:24 AM",
    tone: "info",
  },
  {
    id: "act_003",
    title: "Usage threshold warning",
    description: "SparklePro Cleaning reached 94% of the monthly SMS allowance.",
    timestamp: "Yesterday",
    tone: "warning",
  },
  {
    id: "act_004",
    title: "Human review requested",
    description: "Alpine Air & Heat has a price-sensitive HVAC conversation waiting.",
    timestamp: "Yesterday",
    tone: "danger",
  },
];
