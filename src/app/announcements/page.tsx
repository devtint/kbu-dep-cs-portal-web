import type { Metadata } from "next";
import { AnnouncementCard } from "@/components/content-cards";
import { announcements } from "@/content/site-data";
export const metadata: Metadata = { title: "Announcements" };
export default function AnnouncementsPage() {
  return (
    <PageIntro
      eyebrow="Stay informed"
      title="Announcements"
      description="The latest news, opportunities, and updates from the KBU Computer Science department."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {announcements.map((item) => (
          <AnnouncementCard key={item.id} item={item} />
        ))}
      </div>
    </PageIntro>
  );
}

function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="page-shell py-20">
      <div className="mb-14 max-w-2xl">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="text-5xl font-semibold tracking-tight text-slate-800">{title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-500">{description}</p>
      </div>
      {children}
    </div>
  );
}
