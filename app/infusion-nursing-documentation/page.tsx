import type { Metadata } from "next";
import { TextLink } from "@/components/ButtonLink";
import { Credentials } from "@/components/Credentials";
import { CtaBand } from "@/components/CtaBand";
import { H2, PageHeader, Section } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Infusion Nursing Documentation",
  description:
    "Chair time, nursing documentation, and floor support for hospital infusion on Meditech Expanse and Epic. OCN credentials on the team. Email accounts@cohesyshealth.com.",
};

const work = [
  {
    title: "Chair time",
    body: "If documentation adds minutes to every chair, the schedule collapses. We build nursing documentation against how the unit actually runs — not against a screenshot from another hospital.",
  },
  {
    title: "Documentation that nursing will file",
    body: "Assessments, administration, reactions, and the handoff out of the chair. If nurses invent a paper workaround, the EMR is not done.",
  },
  {
    title: "Floor support",
    body: "Elbow support at go-live and after. Nurse managers should not have to translate the build to the unit by themselves on week one.",
  },
  {
    title: "Appointments and the chair",
    body: "Scheduling, arrival, and documentation have to meet. A perfect treatment plan that cannot be charted in the allotted chair does not help the program.",
  },
];

export default function InfusionPage() {
  return (
    <>
      <PageHeader
        kicker="Infusion"
        title="Infusion nursing documentation that holds up on the floor"
        lede="Nurse managers already know where the record fails: the chair, the clock, and the workaround on the counter. Cohesys Health Solutions builds infusion documentation with oncology nursing in the work, not as a late training event."
      />

      <Section>
        <H2>What nurse managers ask us to fix</H2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {work.map((item) => (
            <li key={item.title} className="border border-line bg-white px-5 py-6">
              <h3 className="font-serif text-xl text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-steel">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-white">
        <H2>OCN credentials on the team</H2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-steel">
          Oncology certified nurses sit on the team with project managers and
          pharmacy. We do not publish named bios or people cards.
        </p>
        <div className="mt-8 max-w-xl">
          <Credentials only={["OCN"]} />
        </div>
      </Section>

      <Section>
        <H2>Documentation is not a side module</H2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-steel">
          Infusion documentation fails when treatment plans and pharmacy
          verification were built without the chair in mind. The same team
          should see Expanse or Beacon, pharmacy, and nursing together.
        </p>
        <p className="mt-6 text-sm text-steel">
          See{" "}
          <TextLink href="/meditech-expanse-oncology">Expanse oncology</TextLink>
          ,{" "}
          <TextLink href="/epic-beacon">Epic Beacon</TextLink>
          , and{" "}
          <TextLink href="/oncology-pharmacy-ehr">oncology pharmacy EHR</TextLink>
          .
        </p>
      </Section>

      <CtaBand
        heading="Bring nursing into the build"
        body="Email accounts@cohesyshealth.com. Tell us whether the issue is chair time, documentation, or floor support after LIVE."
      />
    </>
  );
}
