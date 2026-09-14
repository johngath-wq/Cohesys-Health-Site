import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
        That page is not on this site
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-steel">
        The address may be from the previous website. Privacy, terms, and
        contact still live here — under shorter URLs.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Contact
        </ButtonLink>
      </div>
    </div>
  );
}
