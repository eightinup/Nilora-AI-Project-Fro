import type { JobUrgency } from "./conversation";

export type AppointmentStatus = "requested" | "confirmed" | "cancelled" | "needs_review";

export type AppointmentRequest = {
  id: string;
  businessId: string;
  customerName: string;
  customerPhone: string;
  jobType: string;
  urgency: JobUrgency;
  address: string;
  requestedTime: string;
  status: AppointmentStatus;
  capturedByAi: boolean;
};
