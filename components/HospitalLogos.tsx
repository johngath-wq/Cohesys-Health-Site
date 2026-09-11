import Image from "next/image";
import { hospitals } from "@/lib/site";

function tileClass(name: string, tone: "light" | "dark") {
  if (name === "South County Health") return "bg-[#0f3d4c]";
  if (name === "Samaritan Health") return "bg-[#3a5c8c]";
  if (tone === "dark") return "bg-navy";
  return "bg-white";
}

export function HospitalLogos() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {hospitals.map((hospital) => (
        <li
          key={hospital.name}
          className={`flex min-h-[6.5rem] items-center justify-center overflow-hidden rounded-sm border border-line px-4 py-5 ${tileClass(
            hospital.name,
            hospital.tone,
          )}`}
        >
          <Image
            src={hospital.src}
            alt={hospital.name}
            width={hospital.width}
            height={hospital.height}
            className="max-h-14 w-auto max-w-full object-contain"
          />
        </li>
      ))}
    </ul>
  );
}
