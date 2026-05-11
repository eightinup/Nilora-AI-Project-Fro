import type { ErrorLog } from "@/types/error";

export const errorLogs: ErrorLog[] = [
  {
    id: "err_001",
    source: "SMS Router",
    businessId: "biz_004",
    message: "Monthly usage threshold crossed for assigned number.",
    status: "monitoring",
    createdAt: "2026-05-10T16:12:00",
  },
  {
    id: "err_002",
    source: "AI Drafting",
    businessId: "biz_003",
    message: "Conversation paused because pricing question requires owner approval.",
    status: "open",
    createdAt: "2026-05-10T17:44:00",
  },
  {
    id: "err_003",
    source: "Call Parser",
    businessId: "biz_005",
    message: "Duplicate missed-call event suppressed for paused business.",
    status: "resolved",
    createdAt: "2026-05-09T13:20:00",
  },
];
