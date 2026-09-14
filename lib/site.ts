export const site = {
  legalName: "Cohesys Health Solutions",
  tagline: "Innovate. Implement. Improve.",
  tenure: "Oncology-only EMR consulting since day one.",
  email: "accounts@cohesyshealth.com",
  url: "https://www.cohesyshealth.com",
  address: {
    street: "201 Burlington Road",
    city: "Bedford",
    region: "MA",
    postal: "01730",
    country: "US",
  },
} as const;

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postal}`;

export const mailtoHref = `mailto:${site.email}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/meditech-expanse-oncology", label: "Expanse Oncology" },
  { href: "/epic-beacon", label: "Epic Beacon" },
  { href: "/oncology-pharmacy-ehr", label: "Pharmacy" },
  { href: "/infusion-nursing-documentation", label: "Infusion" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

export const credentials = [
  {
    abbr: "PMP",
    name: "Project Management Professional",
  },
  {
    abbr: "BCOP",
    name: "Board Certified Oncology Pharmacist",
  },
  {
    abbr: "CPhT",
    name: "Certified Pharmacy Technician",
  },
  {
    abbr: "OCN",
    name: "Oncology Certified Nurse",
  },
] as const;

export const hospitals = [
  {
    name: "Frederick Health",
    src: "/hospitals/frederick-health.jpg",
    width: 916,
    height: 296,
    tone: "light",
  },
  {
    name: "Anderson Hospital",
    src: "/hospitals/anderson-hospital.jpg",
    width: 269,
    height: 53,
    tone: "light",
  },
  {
    name: "Golden Valley Memorial Healthcare",
    src: "/hospitals/golden-valley-memorial.jpg",
    width: 614,
    height: 236,
    tone: "light",
  },
  {
    name: "Signature Healthcare",
    src: "/hospitals/signature-healthcare.jpg",
    width: 480,
    height: 124,
    tone: "light",
  },
  {
    name: "South County Health",
    src: "/hospitals/south-county-health.jpg",
    width: 224,
    height: 85,
    tone: "dark",
  },
  {
    name: "Med Center Health",
    src: "/hospitals/med-center-health.jpg",
    width: 334,
    height: 76,
    tone: "light",
  },
  {
    name: "Bristol Health",
    src: "/hospitals/bristol-health.jpg",
    width: 278,
    height: 49,
    tone: "light",
  },
  {
    name: "Samaritan Health",
    src: "/hospitals/samaritan-health.jpg",
    width: 484,
    height: 226,
    tone: "dark",
  },
] as const;

export const quotes = [
  {
    quote:
      "Their assistance and input with everything from building treatment plans to setting up the billing as well as the appointment and nursing documentation was incredibly helpful. Organization and project management skills are also excellent with timelines of activities and checkpoints that the implementation team needed to complete as the project moved forward.",
    name: "Arthur P",
    role: "IT Director",
    org: "Anderson Hospital",
  },
  {
    quote:
      "We needed someone who understood the relationships between Oncology Practice, infusion services, Pharmacy, and other cancer related programs since workflows would be drastically different. I can't speak highly enough about their capabilities and importance to our implementation.",
    name: "Gary C",
    role: "CIO",
    org: "South County Health",
  },
] as const;

export const roles = [
  "CIO",
  "IT director",
  "Pharmacy",
  "Nursing",
  "Cancer program",
  "Other",
] as const;

export const ehrOptions = [
  "Meditech Expanse",
  "Epic",
  "Both",
  "Other",
] as const;

export const moduleOptions = [
  "Oncology",
  "Pharmacy",
  "Infusion",
  "Treatment plans",
  "Upgrade",
  "Other",
] as const;

export const timelines = [
  "Exploring",
  "This FY",
  "Active build",
  "Live",
  "Optimization",
] as const;

export const routes = [
  "/",
  "/meditech-expanse-oncology",
  "/epic-beacon",
  "/oncology-pharmacy-ehr",
  "/infusion-nursing-documentation",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
] as const;

export function titleFor(pagePhrase: string) {
  return `${site.legalName} | ${pagePhrase}`;
}
