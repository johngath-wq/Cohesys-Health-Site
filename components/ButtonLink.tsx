import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "onDark";
  className?: string;
};

const variants = {
  primary:
    "bg-blue text-white hover:bg-blue-dark focus-visible:outline-offset-2",
  secondary:
    "border border-navy/20 bg-white text-navy hover:border-navy/40 hover:bg-paper",
  onDark:
    "border border-white/40 bg-transparent text-white hover:bg-white/10",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const external = href.startsWith("mailto:") || href.startsWith("http");
  const classes = `inline-flex items-center justify-center rounded-sm px-5 py-2.5 text-sm font-semibold tracking-wide no-underline transition-colors ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-blue underline-offset-2 hover:underline"
    >
      {children}
    </Link>
  );
}
