import { ButtonLink } from "@/components/ButtonLink";
import { mailtoHref } from "@/lib/site";

export function CtaBand({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <section className="bg-navy">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-base leading-7 text-white/80">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">Talk to us</ButtonLink>
          <ButtonLink href={mailtoHref} variant="onDark">
            Email accounts@
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
