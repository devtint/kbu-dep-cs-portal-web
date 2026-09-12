import type { Metadata } from "next";
import { EventCard } from "@/components/content-cards";
import { events } from "@/content/site-data";
export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <div className="page-shell py-20">
      <div className="mb-14 max-w-2xl">
        <p className="eyebrow mb-4">Learn together</p>
        <h1 className="text-5xl font-semibold tracking-tight text-slate-800">Events</h1>
        <p className="mt-5 text-lg leading-8 text-slate-500">
          Workshops, talks, and community moments to help you connect and grow.
        </p>
      </div>
      <div className="grid max-w-3xl gap-4">
        {events.map((item) => (
          <EventCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
