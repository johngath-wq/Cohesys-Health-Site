import type { Metadata } from "next";
import { Credentials } from "@/components/Credentials";
import { CtaBand } from "@/components/CtaBand";
import { H2, PageHeader, Section } from "@/components/PageHeader";
import { addressLine, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Cohesys Health Solutions is oncology-only EMR consulting in Bedford, Massachusetts. Not Cohesys Inc. (BoneTape). Email accounts@cohesyshealth.com.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About"
        title="A Bedford firm that only does oncology EMR"
        lede="Cohesys Health Solutions implements and optimizes oncology on Meditech Expanse and Epic. Project managers, oncology pharmacists, and infusion nurses work the same build."
      />

      <Section>
        <H2>Who we are</H2>
        <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-steel">
          <p>
            Community-hospital cancer programs need the clinic, the chair, and
            the pharmacy in one record. That is the only work we take.
          </p>
          <p className="font-medium text-navy">{site.tenure}</p>
          <p>
            Platforms are Meditech Expanse and Epic. Expanse carries more of the
            public proof on this site. Epic Beacon is a live, staffed offer led
            with EpicCare Ambulatory and Beacon Oncology certifications.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <H2>Credentials on the team — not people cards</H2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-steel">
          We do not publish named bios. The credentials that sit with the team
          are:
        </p>
        <div className="mt-8">
          <Credentials />
        </div>
      </Section>

      <Section>
        <H2>How an inquiry becomes a statement of work</H2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-steel">
          Hospital teams email{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-blue underline-offset-2 hover:underline"
          >
            {site.email}
          </a>{" "}
          or use the contact form. We reply from that inbox and, when there is
          a fit, scope a statement of work. There is no phone number and no
          booking widget on this site.
        </p>
      </Section>

      <Section className="bg-white">
        <H2>Cohesys Health Solutions, not Cohesys Inc.</H2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-steel">
          We are an oncology EMR consulting firm in Bedford, Massachusetts. We
          are not Cohesys Inc., the medical-device company behind BoneTape
          (cohesys.com). If you are looking for BoneTape, that is a different
          company and a different website.
        </p>
        <address className="mt-6 max-w-sm text-base not-italic leading-7 text-navy">
          {site.legalName}
          <br />
          {addressLine}
          <br />
          <a
            href={`mailto:${site.email}`}
            className="text-blue underline-offset-2 hover:underline"
          >
            {site.email}
          </a>
        </address>
      </Section>

      <CtaBand
        heading="Start with the contact form"
        body="We will reply from accounts@cohesyshealth.com. If the work is a fit, the next document is a statement of work."
      />
    </>
  );
}
