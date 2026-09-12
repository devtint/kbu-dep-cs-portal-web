import Image from "next/image";
import type { Event } from "@/lib/types";

export function EventCard({ item }: { item: Event }) {
  const [month, day] = item.date.split(" ");

  return (
    <article className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-kbu-border hover:shadow-lg hover:shadow-slate-200/50">
      <time
        dateTime={item.date}
        className="flex size-16 shrink-0 flex-col items-center justify-center rounded-xl bg-kbu-selection text-center text-kbu-orange"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.12em]">
          {month?.slice(0, 3)}
        </span>
        <span className="text-2xl font-semibold leading-none">{day?.replace(",", "")}</span>
      </time>
      <Image
        src={item.image}
        alt=""
        width={64}
        height={64}
        className="size-16 shrink-0 rounded-xl bg-kbu-mist object-cover"
      />
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-kbu-orange">
          {item.type}
        </p>
        <h3 className="font-semibold text-slate-800">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
        <p className="mt-2 text-xs font-medium text-slate-400">
          {item.time} · {item.location}
        </p>
      </div>
    </article>
  );
}
