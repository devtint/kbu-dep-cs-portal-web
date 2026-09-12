import Image from "next/image";
import type { Announcement } from "@/lib/types";

export function AnnouncementCard({ item }: { item: Announcement }) {
  return (
    <article className="cursor-pointer group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-kbu-primary hover:shadow-lg hover:shadow-slate-200/50">
      <Image
        src={item.image}
        alt=""
        width={640}
        height={240}
        className="mb-5 h-32 w-full rounded-xl bg-kbu-mist object-cover"
      />
      <div className="mb-5 flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-kbu-orange">
        <span>{item.category}</span>
        <time dateTime={item.date}>{item.date}</time>
      </div>
      <h3 className="mb-3 text-lg font-semibold text-slate-800 group-hover:text-kbu-primary-hover">
        {item.title}
      </h3>
      <p className="text-sm leading-6 text-slate-500">{item.excerpt}</p>
    </article>
  );
}
