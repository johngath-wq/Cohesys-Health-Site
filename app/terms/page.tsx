import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/PageHeader";
import { addressLine, mailtoHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms of use for the Cohesys Health Solutions marketing website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        kicker="Legal"
        title="Terms"
        lede="These terms govern use of the Cohesys Health Solutions marketing website. They do not create a consulting engagement. Work for a hospital begins only under a signed statement of work."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8 text-base leading-7 text-steel">
          <section>
            <h2 className="font-serif text-2xl text-navy">The site</h2>
            <p className="mt-3">
              This website is a public marketing site operated by {site.legalName}
              , {addressLine}. By using it, you agree to these terms. If you do
              not agree, do not use the site.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">No professional engagement yet</h2>
            <p className="mt-3">
              Content on this site is general information about oncology EMR
              consulting. It is not legal, clinical, or implementation advice
              for your hospital, and it is not an offer to perform work until we
              both sign a statement of work (or other written agreement). Email
              or a submitted form is an inquiry, not a contract.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Contact form and email</h2>
            <p className="mt-3">
              You may email{" "}
              <a href={mailtoHref} className="text-blue underline-offset-2 hover:underline">
                {site.email}
              </a>{" "}
              or use the contact form. Do not submit protected health
              information or other confidential patient data. We may decline or
              delete inquiries that are off-topic, abusive, or appear to contain
              PHI.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Hospital names and marks</h2>
            <p className="mt-3">
              Hospital names and logos appear with written permission as
              organizations we have worked with. Their appearance is not an
              endorsement of a current product, a joint venture, or a statement
              about any other company&apos;s software.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Intellectual property</h2>
            <p className="mt-3">
              Site text, layout, and our logo are owned by {site.legalName} or
              used under permission. You may not copy the site for a competing
              commercial purpose. Platform names such as Meditech Expanse and
              Epic are used to describe the software environments we work in;
              those marks belong to their owners.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Disclaimers</h2>
            <p className="mt-3">
              The site is provided “as is.” We do not warrant that it is
              error-free, uninterrupted, or fit for a particular purpose. We do
              not warrant that any described approach will be appropriate for
              your organization.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Limitation of liability</h2>
            <p className="mt-3">
              To the fullest extent permitted by Massachusetts law, {site.legalName}{" "}
              is not liable for indirect, incidental, special, consequential, or
              punitive damages, or for lost profits, arising from use of this
              marketing website. Our total liability arising from the site
              itself will not exceed one hundred U.S. dollars. This limit does
              not apply to liability that cannot be limited under applicable
              law, and it does not rewrite a signed statement of work.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Governing law</h2>
            <p className="mt-3">
              These terms are governed by the laws of the Commonwealth of
              Massachusetts, without regard to conflict-of-law rules. Exclusive
              venue for disputes arising from this website is the state or
              federal courts located in Massachusetts.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Changes</h2>
            <p className="mt-3">
              We may update these terms by posting a new version on this page.
              Continued use of the site after a change is acceptance of the
              updated terms.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Contact</h2>
            <p className="mt-3">
              {site.legalName}
              <br />
              {addressLine}
              <br />
              {site.email}
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
