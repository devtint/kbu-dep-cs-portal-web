import Image from "next/image";
import Link from "next/link";
import type { Resource } from "@/lib/types";

export function ResourceCard({ item }: { item: Resource }) {
  return (
    <Link
      href={item.href}
      className="group rounded-2xl p-6 transition hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kbu-orange"
    >
      <Image
        src={item.image}
        alt=""
        width={640}
        height={360}
        className="mb-6 h-32 w-full rounded-xl bg-kbu-mist object-cover"
      />
      <span className="mb-12 block text-xs font-semibold uppercase tracking-[0.12em]">
        {item.label}
      </span>
      <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
      <p className="text-sm leading-6 text-slate-500">{item.description}</p>
      <span
        className="mt-6 block text-xl text-kbu-primary transition group-hover:translate-x-1"
        aria-hidden="true"
      >
        →
      </span>
    </Link>
  );
}
