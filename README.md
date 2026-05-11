# Nilora AI

Nilora AI is a frontend-only portfolio SaaS dashboard demo for AI-powered missed-call SMS follow-up for local service businesses.

This project does not connect to Twilio, OpenAI, Supabase, Stripe, auth providers, databases, webhooks, or external APIs. All product data is local mock data under `src/data`.

## Phase 1 Scope

- Next.js App Router, TypeScript, and Tailwind CSS scaffold
- Premium bright SaaS landing page at `/`
- Dashboard layout with sidebar and topbar at `/dashboard`
- Dashboard overview with KPI cards, usage chart, recent activity, and high-intent conversation table
- Local domain types for businesses, conversations, appointments, usage, and error logs
- Mock data for local service businesses, SMS conversations, appointment requests, usage events, and errors

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verify

```bash
npm run build
```

## Planned Phase 2

- Businesses page with table and create/edit modal UI
- Conversations page with SMS inbox, detail panel, customer info, takeover toggle, and manual reply input
- Appointments page with request table and confirm/cancel UI
