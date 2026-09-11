import Link from "next/link";
import { addressLine, footerNav, mailtoHref, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl text-white">{site.legalName}</p>
          <p className="mt-2 text-sm tracking-wide text-white/70">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/80">
            {site.tenure} Meditech Expanse and Epic. Treatment plans, pharmacy,
            infusion, and the IT plan that holds them together.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Site
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/85 no-underline hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/85 no-underline hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Contact
          </p>
          <p className="mt-3 text-sm leading-6 text-white/85">
            <a href={mailtoHref} className="text-white underline-offset-2 hover:underline">
              {site.email}
            </a>
            <br />
            {addressLine}
          </p>
          <p className="mt-6 text-sm leading-6 text-white/65">
            Cohesys Health Solutions is not Cohesys Inc., the medical-device
            company behind BoneTape (cohesys.com).
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/50 sm:px-6">
          © 2026 {site.legalName}
        </p>
      </div>
    </footer>
  );
}
