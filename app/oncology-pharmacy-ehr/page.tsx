import type { Metadata } from "next";
import { TextLink } from "@/components/ButtonLink";
import { Credentials } from "@/components/Credentials";
import { CtaBand } from "@/components/CtaBand";
import { H2, PageHeader, Section } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Oncology Pharmacy EHR",
  description:
    "CPOE, verification, formulary, and USP 800 EHR touchpoints for hospital oncology pharmacy on Meditech Expanse and Epic. BCOP and CPhT credentials on the team. Email accounts@cohesyshealth.com.",
};

const work = [
  {
    title: "CPOE and treatment plans",
    body: "Orders have to be buildable, reviewable, and safe to file. Plans that look complete in a dictionary still fail at verification if pharmacy was not in the build.",
  },
  {
    title: "Verification",
    body: "The pharmacist's queue is where a thin oncology build shows up. We build and test the path from the plan to the verified order, not only the pretty protocol.",
  },
  {
    title: "Formulary",
    body: "Oncology formulary in the EHR has to match what the pharmacy will actually release. Names, products, and restrictions that drift from the chair waste the first weeks of LIVE.",
  },
  {
    title: "USP 800 EHR touchpoints",
    body: "Hazardous-drug handling is a pharmacy operation. The EHR still has to carry the flags, documentation, and handoffs that USP 800 expects at those touchpoints. We do not pretend the record is the cleanroom.",
  },
];

export default function PharmacyPage() {
  return (
    <>
      <PageHeader
        kicker="Pharmacy"
        title="Oncology pharmacy in Expanse and Epic"
        lede="If the pharmacist cannot verify the plan, the cancer program does not have an EMR. Cohesys Health Solutions puts pharmacy in the build: CPOE, verification, formulary, and the USP 800 touchpoints that belong in the record."
      />

      <Section>
        <H2>What pharmacy needs from the EHR</H2>
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
        <H2>BCOP and CPhT credentials on the team</H2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-steel">
          Oncology pharmacy credentials sit with the team, not on named people
          cards. Board certified oncology pharmacists and certified pharmacy
          technicians work the same build as project management and nursing.
        </p>
        <div className="mt-8 max-w-2xl">
          <Credentials only={["BCOP", "CPhT"]} />
        </div>
      </Section>

      <Section>
        <H2>The rest of the program still has to fit</H2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-steel">
          Pharmacy verification fails when infusion documentation and the IT
          plan belong to a different workstream. That is why we staff oncology as one
          build on Meditech Expanse and Epic.
        </p>
        <p className="mt-6 text-sm text-steel">
          See{" "}
          <TextLink href="/meditech-expanse-oncology">Expanse oncology</TextLink>
          ,{" "}
          <TextLink href="/epic-beacon">Epic Beacon</TextLink>
          , and{" "}
          <TextLink href="/infusion-nursing-documentation">
            infusion nursing documentation
          </TextLink>
          .
        </p>
      </Section>

      <CtaBand
        heading="Pharmacy on the build, not a late review"
        body="Email accounts@cohesyshealth.com. Tell us if the pain is CPOE, verification, formulary, or an upgrade."
      />
    </>
  );
}
