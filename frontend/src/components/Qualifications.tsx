import type { Qualification } from "@/lib/api";

export default function Qualifications({
  qualifications,
}: {
  qualifications: Qualification[];
}) {
  return (
    <section id="qualifications" className="py-20">
      <div className="section-container">
        <div className="mb-12">
          <h2 className="section-title">Qualifications</h2>
          <p className="section-subtitle">
            My academic journey and current studies.
          </p>
        </div>

        <div className="space-y-6">
          {qualifications.map((qual) => (
            <article key={qual.id} className="surface-card p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
                    {qual.period}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-stone-900">
                    {qual.degree}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-stone-500">
                    {qual.institution}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-stone-600">{qual.description}</p>

              {qual.highlights.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {qual.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
