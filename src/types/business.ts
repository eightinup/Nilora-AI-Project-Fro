export type BusinessStatus = "active" | "trial" | "paused" | "needs_attention";

export type BusinessPlan = "Starter" | "Growth" | "Pro";

export type Business = {
  id: string;
  name: string;
  industry: string;
  ownerName: string;
  ownerEmail: string;
  phoneNumber: string;
  assignedPhoneNumber: string;
  city: string;
  state: string;
  status: BusinessStatus;
  plan: BusinessPlan;
  smsUsed: number;
  smsLimit: number;
  missedCallsRecovered: number;
  appointmentRequests: number;
  aiResponseRate: number;
  createdAt: string;
};
