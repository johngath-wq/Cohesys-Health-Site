import { site } from "@/lib/site";

export type Inquiry = {
  firstName: string;
  lastName: string;
  workEmail: string;
  organization: string;
  role: string;
  ehr: string;
  moduleFocus: string;
  timeline: string;
  comments: string;
};

export function inquiryFromForm(form: FormData): Inquiry {
  const read = (key: string) => String(form.get(key) ?? "").trim();
  return {
    firstName: read("firstName"),
    lastName: read("lastName"),
    workEmail: read("workEmail"),
    organization: read("organization"),
    role: read("role"),
    ehr: read("ehr"),
    moduleFocus: read("moduleFocus"),
    timeline: read("timeline"),
    comments: read("comments"),
  };
}

export function inquiryBody(data: Inquiry) {
  const lines = [
    `First name: ${data.firstName}`,
    `Last name: ${data.lastName}`,
    `Work email: ${data.workEmail}`,
    `Organization: ${data.organization}`,
    `Role: ${data.role}`,
    `EHR: ${data.ehr}`,
    `Module/focus: ${data.moduleFocus}`,
    `Timeline: ${data.timeline}`,
    "",
    "Comments:",
    data.comments || "(none)",
  ];
  return lines.join("\n");
}

export function inquiryMailto(data: Inquiry) {
  const subject = `Hospital inquiry — ${data.organization} — ${data.moduleFocus}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(inquiryBody(data))}`;
}

export const requiredInquiryFields: (keyof Inquiry)[] = [
  "firstName",
  "lastName",
  "workEmail",
  "organization",
  "role",
  "ehr",
  "moduleFocus",
  "timeline",
];
