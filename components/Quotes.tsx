import { quotes } from "@/lib/site";

export function Quotes({ ids }: { ids?: string[] }) {
  const selected = ids
    ? quotes.filter((item) => ids.includes(item.org))
    : quotes;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {selected.map((item) => (
        <figure
          key={item.org}
          className="border-l-2 border-blue bg-white px-6 py-6 shadow-[0_1px_0_rgba(12,34,56,0.04)]"
        >
          <blockquote className="font-serif text-lg leading-8 text-ink">
            “{item.quote}”
          </blockquote>
          <figcaption className="mt-5 text-sm text-steel">
            <span className="font-semibold text-navy">{item.name}</span>
            {", "}
            {item.role}
            <span className="block">{item.org}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
