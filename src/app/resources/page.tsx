import type { Metadata } from "next";
import Image from "next/image";
import { resources } from "@/content/site-data";
export const metadata: Metadata = { title: "Resources" };

export default function ResourcesPage() {
  return (
    <div className="page-shell py-20">
      <div className="mb-14 max-w-2xl">
        <p className="eyebrow mb-4">Your next step</p>
        <h1 className="text-5xl font-semibold tracking-tight text-slate-800">Resources</h1>
        <p className="mt-5 text-lg leading-8 text-slate-500">
          A growing collection of tools, guidance, and support for your academic journey.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {resources.map((item) => (
          <section
            id={item.id}
            key={item.id}
            className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6"
          >
            <Image
              src={item.image}
              alt=""
              width={640}
              height={360}
              className="mb-6 h-32 w-full rounded-xl bg-kbu-mist object-contain p-5"
            />
            <p className="eyebrow mb-6">{item.label}</p>
            <h2 className="text-xl font-semibold text-slate-800">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">{item.description}</p>
            <p className="mt-8 text-sm font-medium text-slate-400">Details will be added soon.</p>
          </section>
        ))}
      </div>
    </div>
  );
}
