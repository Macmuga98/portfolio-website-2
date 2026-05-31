import type { Skill } from "@/lib/api";

export default function Skills({ skills }: { skills: Skill[] }) {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="bg-white py-20">
      <div className="section-container">
        <div className="mb-12">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Core areas I focus on as I grow in data science and software development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category) => (
            <div key={category} className="surface-card p-6">
              <h3 className="mb-5 font-display text-lg font-semibold text-brand-700">
                {category}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex justify-between text-sm">
                        <span className="font-medium text-stone-800">{skill.name}</span>
                        <span className="text-stone-400">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-stone-100">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
