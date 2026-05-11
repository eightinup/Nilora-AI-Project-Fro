export type ErrorLogStatus = "open" | "monitoring" | "resolved";

export type ErrorLog = {
  id: string;
  source: "SMS Router" | "AI Drafting" | "Call Parser" | "Billing Guard";
  businessId: string;
  message: string;
  status: ErrorLogStatus;
  createdAt: string;
};
