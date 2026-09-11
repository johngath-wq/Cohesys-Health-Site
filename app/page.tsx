import type { Metadata } from "next";
import { ButtonLink, TextLink } from "@/components/ButtonLink";
import { Credentials } from "@/components/Credentials";
import { CtaBand } from "@/components/CtaBand";
import { HospitalLogos } from "@/components/HospitalLogos";
import { H2, Section } from "@/components/PageHeader";
import { Quotes } from "@/components/Quotes";
import { mailtoHref, site, titleFor } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: titleFor("Oncology EMR for Epic and Meditech Expanse"),
  },
  description:
    "Community-hospital oncology implementation and optimization on Meditech Expanse and Epic. Project managers, oncology pharmacists, and infusion nurses on the build. Email accounts@cohesyshealth.com.",
};

const roles = [
  {
    title: "IT and project leadership",
    body: "The project plan, dictionaries, TEST, billing and scheduling touchpoints, and the checkpoints the hospital team still has to complete.",
  },
  {
    title: "Pharmacy",
    body: "Treatment plans, CPOE, verification, and formulary — with BCOP and CPhT credentials on the team.",
  },
  {
    title: "Nursing",
    body: "Infusion documentation, chair-side workflow, and appointment flow — with OCN credentials on the team.",
  },
];

const phases = [
  {
    title: "Project management",
    body: "Timelines, activities, and checkpoints the implementation team needs to complete as the work moves forward.",
  },
  {
    title: "Build",
    body: "Treatment plans, dictionaries, pharmacy, infusion documentation, billing, and appointments — the pieces that have to match how the cancer program actually runs.",
  },
  {
    title: "Validation in TEST",
    body: "A working model in TEST. Walkthroughs with the people who will use it, before LIVE.",
  },
  {
    title: "Support and optimization",
    body: "Education, elbow support, and the post-live work that keeps documentation, pharmacy, and the schedule aligned.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              {site.tagline}
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.15] text-navy sm:text-5xl lg:text-[3.35rem]">
              Oncology EMR for community hospitals. Expanse and Epic.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
              Cohesys Health Solutions implements and optimizes oncology only.
              Meditech Expanse and Epic. Treatment plans, pharmacy, infusion,
              and the IT plan that holds them together.
            </p>
            <p className="mt-4 text-base font-medium text-navy">{site.tenure}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Talk to us</ButtonLink>
              <ButtonLink href={mailtoHref} variant="secondary">
                {site.email}
              </ButtonLink>
            </div>
          </div>
          <aside className="border border-line bg-paper px-6 py-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">
              Platforms
            </p>
            <ul className="mt-4 space-y-4 text-navy">
              <li>
                <p className="font-semibold">Meditech Expanse</p>
                <p className="text-sm leading-6 text-steel">
                  Heavier public proof. Treatment plans, pharmacy, infusion,
                  billing, and nursing documentation.
                </p>
              </li>
              <li>
                <p className="font-semibold">Epic</p>
                <p className="text-sm leading-6 text-steel">
                  Live, staffed offer. Beacon and Ambulatory-certified
                  leadership.
                </p>
              </li>
            </ul>
            <p className="mt-6 border-t border-line pt-5 text-sm leading-6 text-steel">
              201 Burlington Road
              <br />
              Bedford, MA 01730
            </p>
          </aside>
        </div>
      </section>

      <Section>
        <H2>Built for hospital cancer programs, not a general EHR bench</H2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-steel">
          The work is oncology: the clinic, the chair, the pharmacy, and the IT
          plan that has to hold when those workflows change together.
        </p>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {roles.map((role) => (
            <li key={role.title} className="border border-line bg-white px-5 py-6">
              <h3 className="font-serif text-xl text-navy">{role.title}</h3>
              <p className="mt-3 text-sm leading-6 text-steel">{role.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-white">
        <H2>Implementation and optimization, same team</H2>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {phases.map((phase, index) => (
            <li key={phase.title} className="border border-line bg-cream px-5 py-6">
              <p className="text-xs font-semibold tracking-[0.14em] text-blue">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-serif text-xl text-navy">{phase.title}</h3>
              <p className="mt-3 text-sm leading-6 text-steel">{phase.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <H2>Meditech Expanse and Epic</H2>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="border border-line bg-white p-6">
            <h3 className="font-serif text-2xl text-navy">Meditech Expanse oncology</h3>
            <p className="mt-3 text-sm leading-6 text-steel">
              Community-hospital Expanse work is where most of the public proof
              on this site sits: treatment plans, dictionary build, TEST,
              pharmacy, infusion, billing, and nursing documentation.
            </p>
            <p className="mt-4">
              <ButtonLink href="/meditech-expanse-oncology" variant="secondary">
                Expanse Oncology
              </ButtonLink>
            </p>
          </article>
          <article className="border border-line bg-white p-6">
            <h3 className="font-serif text-2xl text-navy">Epic Beacon</h3>
            <p className="mt-3 text-sm leading-6 text-steel">
              Epic is a live, staffed offer for community-hospital cancer
              programs. Leadership is certified in EpicCare Ambulatory and
              Beacon Oncology. Public proof remains heavier on Expanse.
            </p>
            <p className="mt-4">
              <ButtonLink href="/epic-beacon" variant="secondary">
                Epic Beacon
              </ButtonLink>
            </p>
          </article>
        </div>
        <p className="mt-6 text-sm text-steel">
          Also:{" "}
          <TextLink href="/oncology-pharmacy-ehr">oncology pharmacy EHR</TextLink>{" "}
          and{" "}
          <TextLink href="/infusion-nursing-documentation">
            infusion nursing documentation
          </TextLink>
          .
        </p>
      </Section>

      <Section className="bg-white">
        <H2>Hospitals we have worked with</H2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-steel">
          Hospital marks appear with written permission. Alt text is the
          hospital name.
        </p>
        <div className="mt-8">
          <HospitalLogos />
        </div>
      </Section>

      <Section>
        <H2>From hospital IT leaders</H2>
        <div className="mt-8">
          <Quotes />
        </div>
      </Section>

      <Section className="bg-white">
        <H2>Clinical and project credentials on the team</H2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-steel">
          Credentials sit with the team, not on named bio cards. Project
          managers, oncology pharmacists, pharmacy technicians, and infusion
          nurses work the same build.
        </p>
        <div className="mt-8">
          <Credentials />
        </div>
      </Section>

      <Section>
        <H2>Cohesys Health Solutions, not Cohesys Inc.</H2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-steel">
          We are an oncology EMR consulting firm at 201 Burlington Road,
          Bedford, Massachusetts. We are not Cohesys Inc., the medical-device
          company behind BoneTape (cohesys.com).
        </p>
      </Section>

      <CtaBand
        heading="Ready to talk about the oncology build?"
        body="Email accounts@cohesyshealth.com or use the hospital contact form. We reply with a scoped conversation — no booking widget, no phone line on this site."
      />
    </>
  );
}
