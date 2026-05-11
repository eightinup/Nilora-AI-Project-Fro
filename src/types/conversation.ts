export type ConversationStatus = "open" | "booked" | "needs_human" | "closed";
export type MessageSender = "customer" | "ai" | "human" | "system";
export type JobUrgency = "low" | "medium" | "high" | "emergency";

export type Customer = {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
};

export type SmsMessage = {
  id: string;
  sender: MessageSender;
  body: string;
  sentAt: string;
  deliveryStatus: "sent" | "delivered" | "read";
};

export type Conversation = {
  id: string;
  businessId: string;
  customer: Customer;
  missedCallAt: string;
  jobType: string;
  urgency: JobUrgency;
  status: ConversationStatus;
  aiHandled: boolean;
  appointmentIntent: boolean;
  lastMessageAt: string;
  messages: SmsMessage[];
};
