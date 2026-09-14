import { organizationSchema } from "@/lib/schema";

export function JsonLd() {
  const json = JSON.stringify(organizationSchema());
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
