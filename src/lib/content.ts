import type { ProcessStep, Project, Service, Stat, Testimonial } from "@/types/content";

export const stats: Stat[] = [
  { value: "38+", label: "Premium Launches" },
  { value: "4.9/5", label: "Client Experience" },
  { value: "21%", label: "Avg. Conversion Lift" }
];

export const services: Service[] = [
  {
    eyebrow: "01",
    title: "Luxury Web Design",
    description: "Digitale Auftritte mit editorialem Look, starker Typografie und klarer Conversion-Architektur."
  },
  {
    eyebrow: "02",
    title: "Brand Identity Systems",
    description: "Von Logo und Farbwelt bis Design-System: eine hochwertige Marke, die auf jedem Touchpoint konsistent wirkt."
  },
  {
    eyebrow: "03",
    title: "Performance Development",
    description: "Next.js, TypeScript und saubere Komponenten-Strukturen für schnelle, skalierbare und wartbare Websites."
  }
];

export const projects: Project[] = [
  {
    title: "Aurum Atelier",
    category: "E-Commerce Experience",
    description: "Premium-Shop für handgefertigte Interior Pieces mit immersiven Produktstories und edlem Checkout Flow.",
    metric: "+34% Revenue"
  },
  {
    title: "Noir Capital",
    category: "Finance Brand Platform",
    description: "Diskrete, elegante Website für eine Investment-Boutique mit Trust-Fokus und Lead-Qualifizierung.",
    metric: "2.8x Leads"
  },
  {
    title: "Maison Vanta",
    category: "Hospitality Launch",
    description: "High-end Landingpage für ein Boutique-Hotel mit Cinematic Hero, Booking CTA und Concierge-Storytelling.",
    metric: "+47% Bookings"
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: "I",
    title: "Discovery & Direction",
    description: "Wir definieren Zielgruppe, Marktposition und visuelle Leitplanken für einen exklusiven digitalen Auftritt."
  },
  {
    step: "II",
    title: "Design System",
    description: "Logo, Farbwelt, Komponenten, Layouts und Motion-Regeln werden zu einem klaren Marken-System verbunden."
  },
  {
    step: "III",
    title: "Build & Refine",
    description: "Die Website wird performant entwickelt, getestet und für Launch, SEO und Conversion optimiert."
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "Zemax Digital hat unsere Marke nicht nur schöner gemacht, sondern deutlich wertvoller wirken lassen.",
    name: "Elena Hoffmann",
    role: "Founder, Maison Vanta"
  },
  {
    quote: "Die Kombination aus Branding, UX und sauberer Entwicklung war exakt das, was wir gesucht haben.",
    name: "David König",
    role: "Managing Partner, Noir Capital"
  }
];
