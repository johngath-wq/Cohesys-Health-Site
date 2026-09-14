import { credentials } from "@/lib/site";

export function Credentials({
  only,
}: {
  only?: Array<(typeof credentials)[number]["abbr"]>;
}) {
  const items = only
    ? credentials.filter((item) => only.includes(item.abbr))
    : credentials;

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item.abbr}
          className="flex items-baseline gap-3 border border-line bg-white px-4 py-4"
        >
          <span className="font-serif text-xl font-semibold text-blue">
            {item.abbr}
          </span>
          <span className="text-sm text-steel">{item.name}</span>
        </li>
      ))}
    </ul>
  );
}
