export const APP_NAME = "Nilora AI";

export const DASHBOARD_NAV_ITEMS = [
  { label: "Overview", href: "/dashboard" },
  { label: "Businesses", href: "/dashboard/businesses" },
  { label: "Conversations", href: "/dashboard/conversations" },
  { label: "Appointments", href: "/dashboard/appointments" },
  { label: "Usage", href: "/dashboard/usage" },
  { label: "Errors", href: "/dashboard/errors" },
  { label: "Settings", href: "/dashboard/settings" },
] as const;

export const INDUSTRIES = [
  "Plumbing",
  "Electrical",
  "HVAC",
  "Cleaning",
  "Appliance Repair",
  "Garage Doors",
] as const;
