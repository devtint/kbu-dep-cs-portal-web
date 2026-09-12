import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="page-shell py-20">
      <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow mb-4">About the department</p>
          <h1 className="text-5xl font-semibold tracking-tight text-slate-800">
            A community for curious minds.
          </h1>
        </div>
        <div className="max-w-2xl text-lg leading-8 text-slate-600">
          <p>
            KBU Computer Science brings together students, educators, and builders who want to
            understand how technology works—and use it to make a difference.
          </p>
          <p className="mt-6">
            Our department is a place to ask better questions, learn by doing, and find
            collaborators for the ideas you care about. This portal is the beginning of a shared
            digital home for our community.
          </p>
          <div className="mt-12 grid gap-5 border-t border-slate-200 pt-8 sm:grid-cols-2">
            <div>
              <h2 className="text-base font-semibold text-slate-800">Learn by building</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Turn concepts into projects, experiments, and practical skills.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-800">Grow together</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Find peers, mentors, and opportunities to share your work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
