import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/PageHeader";
import { addressLine, mailtoHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Cohesys Health Solutions handles information submitted through this marketing website and contact form.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        kicker="Legal"
        title="Privacy"
        lede="This page describes how Cohesys Health Solutions handles information on this marketing website. It is not a HIPAA notice, and this site is not a place to send protected health information."
      />
      <Section>
        <div className="prose-legal mx-auto max-w-3xl space-y-8 text-base leading-7 text-steel">
          <section>
            <h2 className="font-serif text-2xl text-navy">Who we are</h2>
            <p className="mt-3">
              Cohesys Health Solutions, 201 Burlington Road, Bedford, MA 01730.
              Email{" "}
              <a href={mailtoHref} className="text-blue underline-offset-2 hover:underline">
                {site.email}
              </a>
              . We are not Cohesys Inc. (BoneTape).
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">What this site is</h2>
            <p className="mt-3">
              A public marketing website for oncology EMR consulting. It
              describes services, publishes hospital marks used with permission,
              and collects project inquiries. It is not a patient portal, not an
              EHR, and not a channel for clinical care.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Information we collect</h2>
            <p className="mt-3">
              If you email us or use the contact form, we receive the fields you
              submit: first name, last name, work email, organization, role,
              EHR, module/focus, timeline, and optional comments. Server logs
              may include standard technical data such as IP address, browser,
              and pages requested.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">How we use it</h2>
            <p className="mt-3">
              We use inquiry information to reply from {site.email}, to
              understand whether there is a consulting fit, and — if you ask us
              to — to prepare a statement of work. We do not sell personal
              information.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Do not send PHI</h2>
            <p className="mt-3">
              Do not include patient names, medical record numbers, diagnoses,
              or other protected health information in the form or in unsolicited
              email to the public inbox. If you send PHI by mistake, contact{" "}
              {site.email} so we can delete it from the inquiry channel.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Sharing</h2>
            <p className="mt-3">
              We may use an email or form processor (for example a mailto draft
              in your own mail client, or a form endpoint such as Formspree if
              configured) solely to deliver the inquiry to us. We may share
              information if required by law. We do not sell, rent, or trade
              inquiry lists.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Cookies and analytics</h2>
            <p className="mt-3">
              This site may use cookies that are strictly necessary for the site
              to function. We do not run advertising pixels on these pages. If
              hosting or a future analytics tool sets additional cookies, we
              will update this page.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Retention</h2>
            <p className="mt-3">
              We keep inquiry email for as long as needed to respond and, if an
              engagement starts, as part of ordinary business records. You may
              ask us to delete a marketing inquiry that did not become an
              engagement.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Children</h2>
            <p className="mt-3">
              This site is directed at hospital professionals. It is not
              directed at children, and we do not knowingly collect information
              from minors.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Massachusetts and changes</h2>
            <p className="mt-3">
              We operate from {addressLine}. We may update this page; the
              version on this URL is the current one. Questions: {site.email}.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
