import type { Profile } from "@/lib/api";

export default function Hero({ profile }: { profile: Profile }) {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section id="about" className="relative overflow-hidden pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-accent-400/20 blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:text-left">
          <div className="relative shrink-0">
            <div className="flex h-36 w-36 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 text-4xl font-bold text-white shadow-xl shadow-brand-500/25">
              {initials}
            </div>
            {profile.availableForWork && (
              <span className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-stone-50 bg-brand-500">
                <span className="sr-only">Available for work</span>
              </span>
            )}
          </div>

          <div className="flex-1">
            {profile.availableForWork && (
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
                <span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" />
                Open to opportunities
              </span>
            )}

            <h1 className="font-display text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Hello, I&apos;m{" "}
              <span className="text-brand-700">{profile.name}</span>
            </h1>

            <p className="mt-4 text-xl font-semibold text-accent-600">{profile.title}</p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 lg:max-w-none">
              {profile.bio}
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-stone-500 lg:justify-start">
              <svg className="h-5 w-5 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{profile.location}</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#skills"
                className="rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
              >
                View Skills
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-700 transition hover:border-brand-300 hover:text-brand-700"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
