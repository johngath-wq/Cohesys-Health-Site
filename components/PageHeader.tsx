export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker?: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        {kicker ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-navy sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-steel">{lede}</p>
      </div>
    </header>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-4 py-14 sm:px-6 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="max-w-3xl font-serif text-3xl leading-snug text-navy sm:text-[2rem]">
      {children}
    </h2>
  );
}
