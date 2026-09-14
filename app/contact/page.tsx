import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader, Section } from "@/components/PageHeader";
import { addressLine, mailtoHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Email accounts@cohesyshealth.com or send the hospital contact form. Cohesys Health Solutions, 201 Burlington Road, Bedford, MA 01730. No phone line on this site.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Talk to us about your oncology build"
        lede="Email accounts@cohesyshealth.com or send the form. We reply from that inbox. There is no phone number and no booking widget on this site."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <aside>
            <h2 className="font-serif text-2xl text-navy">Email and address</h2>
            <p className="mt-4 text-base leading-7 text-steel">
              <a
                href={mailtoHref}
                className="font-medium text-blue underline-offset-2 hover:underline"
              >
                {site.email}
              </a>
            </p>
            <address className="mt-4 text-base not-italic leading-7 text-navy">
              {site.legalName}
              <br />
              {addressLine}
            </address>
            <p className="mt-6 text-sm leading-6 text-steel">
              Do not send patient names or other PHI. Use this form for hospital
              project inquiries only.
            </p>
          </aside>
          <div className="border border-line bg-white p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-navy">Hospital contact form</h2>
            <p className="mt-2 mb-8 text-sm text-steel">
              Required fields except comments.
            </p>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
