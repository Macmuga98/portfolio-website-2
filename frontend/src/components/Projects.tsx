import type { Project } from "@/lib/api";

export default function Projects({ projects }: { projects: Project[] }) {
  const sorted = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  return (
    <section id="projects" className="bg-white py-20">
      <div className="section-container">
        <div className="mb-12">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Work and builds I&apos;m developing as I grow my portfolio.
          </p>
        </div>

        {sorted.length === 0 ? (
          <div className="surface-card flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-2xl">
              ??
            </div>
            <h3 className="font-display text-xl font-bold text-stone-900">
              Projects coming soon
            </h3>
            <p className="mt-2 max-w-md text-stone-500">
              I&apos;m currently building new projects and will add them here as they are completed.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((project) => (
              <article
                key={project.id}
                className="group surface-card flex flex-col overflow-hidden transition hover:border-brand-200 hover:shadow-md"
              >
                <div className="relative h-2 bg-gradient-to-r from-brand-500 to-accent-500" />

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-stone-900 group-hover:text-brand-700">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="shrink-0 rounded-full bg-accent-400/10 px-2 py-0.5 text-xs font-medium text-accent-600">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-stone-500">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-stone-100 px-2 py-1 text-xs text-stone-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-3 border-t border-stone-100 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-stone-500 transition hover:text-brand-700"
                    >
                      GitHub ?
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-brand-600 transition hover:text-brand-700"
                      >
                        Live Demo ?
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
