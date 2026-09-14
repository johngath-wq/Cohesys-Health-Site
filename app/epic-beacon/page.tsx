import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { H2, PageHeader, Section } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Epic Beacon",
  description:
    "Epic Beacon for community-hospital cancer programs. Leadership certified in EpicCare Ambulatory and Beacon Oncology. Cohesys Health Solutions. Email accounts@cohesyshealth.com.",
};

const problems = [
  {
    title: "Beacon as a module, not a cancer program",
    body: "Orders, treatment plans, infusion, and pharmacy are built in pieces. The clinic, the chair, and the pharmacy do not share one workflow.",
  },
  {
    title: "Community-hospital constraints",
    body: "A smaller cancer program cannot staff a downtown-style Beacon army. The build still has to be right: plans, documentation, and the schedule.",
  },
  {
    title: "Ambulatory and Beacon out of step",
    body: "Oncology practice and infusion do not meet in the record. Referrals, scheduling, and documentation split across teams that never sat in the same TEST session.",
  },
  {
    title: "Optimization after a thin go-live",
    body: "The system is live and the work is still on paper at the chair. Treatment plans, nursing documentation, and pharmacy verification need a second pass.",
  },
];

const how = [
  {
    title: "Cert-led",
    body: "Leadership holds EpicCare Ambulatory and Beacon Oncology certifications. That is a staffing fact for this offer, not a bio card.",
  },
  {
    title: "Same shape of work as Expanse",
    body: "Project plan, build, validation in TEST, then support. Pharmacy and nursing on the build, not only IT.",
  },
  {
    title: "Community hospitals",
    body: "The offer is for hospital cancer programs that need Beacon and Ambulatory to work together without a giant specialty bench.",
  },
];

export default function EpicBeaconPage() {
  return (
    <>
      <PageHeader
        kicker="Epic"
        title="Epic Beacon for community-hospital cancer programs"
        lede="Cohesys Health Solutions staffs Epic Beacon work for community hospitals. Leadership is certified in EpicCare Ambulatory and Beacon Oncology. Public proof on this site is heavier on Meditech Expanse."
      />

      <Section>
        <H2>What community hospitals run into</H2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {problems.map((item) => (
            <li key={item.title} className="border border-line bg-white px-5 py-6">
              <h3 className="font-serif text-xl text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-steel">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-white">
        <H2>How we work Beacon</H2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {how.map((item) => (
            <li key={item.title} className="border border-line bg-cream px-5 py-6">
              <h3 className="font-serif text-xl text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-steel">{item.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-base leading-7 text-steel">
          If your cancer program is on Meditech Expanse, that work has its own
          page and the quotes from hospital IT leaders.
        </p>
        <p className="mt-6">
          <ButtonLink href="/meditech-expanse-oncology" variant="secondary">
            Meditech Expanse oncology
          </ButtonLink>
        </p>
      </Section>

      <Section>
        <H2>Pharmacy and infusion still sit in the middle</H2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-steel">
          Beacon does not succeed as an IT-only build. CPOE, verification,
          formulary, chair documentation, and floor support have to be in the
          same plan.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/oncology-pharmacy-ehr" variant="secondary">
            Pharmacy
          </ButtonLink>
          <ButtonLink href="/infusion-nursing-documentation" variant="secondary">
            Infusion
          </ButtonLink>
          <ButtonLink href="/contact">Talk to us</ButtonLink>
        </div>
      </Section>

      <CtaBand
        heading="Ask about Beacon staffing"
        body="Email accounts@cohesyshealth.com. Tell us where you are: exploring, this FY, active build, live, or optimization."
      />
    </>
  );
}
