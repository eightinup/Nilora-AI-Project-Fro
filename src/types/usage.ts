export type UsageDailyPoint = {
  date: string;
  sms: number;
  aiReplies: number;
  missedCalls: number;
  recovered: number;
};

export type UsageEvent = {
  id: string;
  businessId: string;
  type: "sms_sent" | "ai_reply" | "missed_call" | "appointment_request";
  description: string;
  quantity: number;
  createdAt: string;
};

export type UsageSummary = {
  totalConversations: number;
  missedCallsRecovered: number;
  appointmentRequests: number;
  smsUsed: number;
  smsLimit: number;
  aiReplies: number;
  aiResponseRate: number;
};

export type RecentActivityItem = {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  tone: "success" | "warning" | "info" | "danger";
};
