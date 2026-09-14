"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { mailtoHref, nav, site } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [pathForMenu, setPathForMenu] = useState(pathname);
  const menuId = useId();

  if (pathForMenu !== pathname) {
    setPathForMenu(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.jpg"
            alt={site.legalName}
            width={577}
            height={194}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`rounded-sm px-2.5 py-2 text-[13px] font-medium tracking-wide no-underline transition-colors ${
                  current
                    ? "text-blue"
                    : "text-navy/80 hover:text-blue"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={mailtoHref}
            className="ml-2 rounded-sm bg-blue px-3.5 py-2 text-[13px] font-semibold text-white no-underline hover:bg-blue-dark"
          >
            Email us
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-line px-3 py-2 text-sm font-semibold text-navy lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id={menuId}
          className="border-t border-line bg-white px-4 py-3 lg:hidden"
          aria-label="Primary"
        >
          <ul className="flex flex-col">
            {nav.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`block border-b border-line py-3 text-base no-underline ${
                      current ? "font-semibold text-blue" : "text-navy"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={mailtoHref}
                className="block py-3 font-semibold text-blue no-underline"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
