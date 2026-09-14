import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { HospitalLogos } from "@/components/HospitalLogos";
import { H2, PageHeader, Section } from "@/components/PageHeader";
import { Quotes } from "@/components/Quotes";

export const metadata: Metadata = {
  title: "Meditech Expanse Oncology",
  description:
    "Treatment plans, dictionary build, TEST validation, and 2.2 work on Meditech Expanse oncology for community hospitals. Cohesys Health Solutions. Email accounts@cohesyshealth.com.",
};

const problems = [
  {
    title: "Paper or a sidecar OIS",
    body: "Oncology still lives on paper, or in a separate oncology information system that does not match Expanse. Orders, nursing documentation, and the pharmacy record diverge.",
  },
  {
    title: "Treatment plans that do not match the clinic",
    body: "Plans are incomplete, copied from somewhere else, or built without pharmacy and nursing in the room. The first patients through the chair expose it.",
  },
  {
    title: "Dictionaries that drift",
    body: "Build in one environment does not survive dictionary synchronization. LIVE does not look like TEST. Fixes get made twice.",
  },
  {
    title: "2.2 and upgrade work",
    body: "An Expanse oncology upgrade is not a weekend patch. Content, dictionaries, and workflows have to be walked again in TEST.",
  },
  {
    title: "TEST that never quite happens",
    body: "There is no working model for stakeholders to sit in. Validation is a slide deck. Go-live is the first real test.",
  },
];

const work = [
  "Project plan, checkpoints, and the hospital tasks that have to finish on time.",
  "Treatment-plan build with pharmacy and nursing at the table.",
  "Dictionary design and the discipline to keep TEST and LIVE aligned.",
  "Billing, appointments, and nursing documentation — not as an afterthought.",
  "A functional model in TEST and walkthroughs with the people who will use it.",
  "Elbow support and optimization after LIVE.",
];

export default function ExpansePage() {
  return (
    <>
      <PageHeader
        kicker="Meditech Expanse"
        title="Meditech Expanse oncology for community hospitals"
        lede="Cohesys Health Solutions builds and optimizes Expanse oncology: treatment plans, pharmacy, infusion, dictionaries, TEST, and the IT plan that holds them together."
      />

      <Section>
        <H2>Where Expanse oncology usually breaks</H2>
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
        <H2>What we do</H2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-steel">
          Same team from plan through optimization. Project managers, oncology
          pharmacists, and infusion nurses on the build — not a general EHR
          bench dropped onto oncology.
        </p>
        <ul className="mt-8 max-w-2xl list-disc space-y-2 pl-5 text-base leading-7 text-ink">
          {work.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-8">
          <ButtonLink href="/contact">Talk to us about Expanse</ButtonLink>
        </p>
      </Section>

      <Section>
        <H2>Proof on Expanse</H2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-steel">
          Hospital IT leaders have written about treatment-plan build, billing,
          appointments, nursing documentation, and the relationships among
          oncology practice, infusion, pharmacy, and related cancer programs.
          Public proof on this site is heavier here than on Epic.
        </p>
        <div className="mt-8">
          <Quotes />
        </div>
        <div className="mt-10">
          <HospitalLogos />
        </div>
      </Section>

      <Section className="bg-white">
        <H2>Related work</H2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-steel">
          Pharmacy and infusion are part of the same Expanse build. Epic Beacon
          is a separate, staffed offer with its own page.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/oncology-pharmacy-ehr" variant="secondary">
            Pharmacy
          </ButtonLink>
          <ButtonLink href="/infusion-nursing-documentation" variant="secondary">
            Infusion
          </ButtonLink>
          <ButtonLink href="/epic-beacon" variant="secondary">
            Epic Beacon
          </ButtonLink>
        </div>
      </Section>

      <CtaBand
        heading="Planning Expanse oncology — or cleaning it up?"
        body="Email accounts@cohesyshealth.com. Tell us whether you are on paper, in a sidecar system, in TEST, or live."
      />
    </>
  );
}
