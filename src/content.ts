// All business facts below are copied from https://www.cleanonscene.com/ (fetched live).
// Prices, inclusions, fees and contact details are VERIFIED from that source.
// Anything marked PENDING is an owner-supplied slot — do not invent a value.

export const PHONE = "404-304-5119";
export const PHONE_HREF = "tel:+14043045119";
export const SMS_HREF = "sms:+14043045119";
export const EMAIL = "booking@cleanonscene.com";
export const IG = "@cleanonscene";
export const IG_URL = "https://www.instagram.com/cleanonscene/";

export type Pkg = {
  id: string;
  name: string;
  time: string;
  small: string;
  large: string;
  lines: string[];
};

export const PACKAGES: Pkg[] = [
  {
    id: "exterior",
    name: "Exterior Only",
    time: "1–1.5 hrs",
    small: "$85",
    large: "$100",
    lines: ["Maintenance service for the outside of the vehicle"],
  },
  {
    id: "interior",
    name: "Interior Only",
    time: "1–1.5 hrs",
    small: "$85",
    large: "$100",
    lines: ["Maintenance service for the inside of the vehicle"],
  },
  {
    id: "quick",
    name: "Quick Detail",
    time: "1.5–2 hrs",
    small: "$125",
    large: "$150",
    lines: [
      "Full interior and exterior detail",
      "Snow foam exterior wash",
      "Wheel / tire deep clean + dressing",
      "No wax",
    ],
  },
  {
    id: "maintenance",
    name: "Maintenance Detail",
    time: "2–3 hrs",
    small: "$150",
    large: "$175",
    lines: [
      "Full interior and exterior detail",
      "Snow foam exterior wash",
      "Wheel / tire deep clean + dressing",
      "Cleaning + coating all interior surfaces",
      "Carnauba wax",
    ],
  },
  {
    id: "premium",
    name: "Premium Detail",
    time: "3+ hrs",
    small: "$175",
    large: "$200",
    lines: [
      "Full interior and exterior detail",
      "Snow foam exterior wash",
      "Wheel / tire deep clean + dressing",
      "Cleaning + coating all interior surfaces",
      "Interior steam clean",
      "HydroShield ceramic wax",
    ],
  },
];

export const CORRECTIONS = [
  { name: "1-step polish + coating", small: "$500", large: "$600" },
  { name: "2-step buff / polish + coating", small: "$700", large: "$800" },
  { name: "3-step buff 2x / polish + coating", small: "$900", large: "$1,000" },
];

export const ADDONS = [
  { name: "Air freshener", price: "+$5" },
  { name: "Pet hair removal", price: "+$25" },
  { name: "Headlight restoration", price: "+$50" },
  { name: "Clay bar", price: "+$50" },
  { name: "Odor removal", price: "+$50" },
  { name: "Engine bay detail", price: "+$50" },
  { name: "De-badge / polish", price: "+$75" },
  { name: "Interior extraction", price: "+$75" },
];

export const PAINS = [
  {
    n: "01",
    q: "The price goes up once the job is done.",
    a: "Every package price is printed on this page. There are only three extra charges, and all three are published: vehicle condition, $2 per mile outside I-285, and 3% on credit or debit.",
    tag: "Published price list",
  },
  {
    n: "02",
    q: "A detail eats a whole day at the shop.",
    a: "We come to your home, your office or wherever the car is parked. Exterior and interior maintenance take 1–1.5 hours. A full Quick Detail takes 1.5–2 hours.",
    tag: "We come to you",
  },
  {
    n: "03",
    q: "You call and nobody answers.",
    a: "Call or text 404-304-5119, or email booking@cleanonscene.com. Both are printed on our own site, so you always have a direct line to book.",
    tag: "Call, text or email",
  },
];

export const WHY = [
  {
    t: "You see the price before you book",
    d: "Exterior $85. Interior $85. Quick Detail $125. Maintenance $150. Premium $175. No quote games.",
  },
  {
    t: "The car never moves",
    d: "We work where it is already parked — driveway, office lot, apartment deck.",
  },
  {
    t: "Every package has a time estimate",
    d: "1.5 hours up to 3+ hours, printed next to each package, so you can plan your day.",
  },
  {
    t: "Fees are disclosed up front",
    d: "Cash preferred. Cards add 3%. Beyond I-285 adds $2 per mile. That is the whole list.",
  },
];

export const STEPS = [
  {
    n: "01",
    t: "Tell us the car",
    d: "Call or text 404-304-5119 with the year, make, model and how dirty it is.",
  },
  {
    n: "02",
    t: "Get the package and the time",
    d: "We match your car to a package on the price list and give you the time range for it.",
  },
  {
    n: "03",
    t: "We come to the car",
    d: "Work is done on site. Cash preferred; credit or debit adds 3%.",
  },
];

export const FAQS = [
  {
    q: "How long does a detail take?",
    a: "Exterior only and interior only take 1–1.5 hours. Quick Detail takes 1.5–2 hours. Maintenance Detail takes 2–3 hours. Premium Detail takes 3+ hours. Paint correction with ceramic coating takes 6–10+ hours.",
  },
  {
    q: "What counts as small and what counts as large?",
    a: "Every package is priced small and large. Text 404-304-5119 your year, make and model and we will tell you which price applies to your vehicle before you book.",
  },
  {
    q: "Do you need my water or power?",
    a: "Text 404-304-5119 before you book. We will tell you exactly what we need at your spot so there are no surprises when we arrive.",
  },
  {
    q: "Why can the final price be different?",
    a: "Three reasons, all published: the condition of the vehicle, $2 per mile outside Metro Atlanta (I-285), and a 3% processing fee on credit or debit. Cash is preferred.",
  },
  {
    q: "Does an SUV or truck cost more than a car?",
    a: "Each package has a small price and a large price, shown side by side on this page. You pay the large price only if your vehicle is priced as large.",
  },
  {
    q: "What is not included in the package price?",
    a: "Add-ons: air freshener $5, pet hair removal $25, headlight restoration $50, clay bar $50, odor removal $50, engine bay detail $50, de-badge or polish $75, interior extraction $75.",
  },
  {
    q: "Where do you work?",
    a: "Metro Atlanta, inside I-285. We also go beyond I-285 for an extra $2 per mile.",
  },
  {
    q: "How do I pay?",
    a: "Cash is preferred. Credit and debit add a 3% processing fee.",
  },
];

export const REVIEW_SLOTS = [
  { id: "slot-1", label: "Review slot 1" },
  { id: "slot-2", label: "Review slot 2" },
  { id: "slot-3", label: "Review slot 3" },
];
