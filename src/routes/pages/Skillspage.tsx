import { Code2, Database, Palette, Wrench } from "lucide-react";

function Skillspage() {
  const skillGroups = [
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Frontend",
      skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React"],
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Routing & State",
      skills: ["React Router", "Zustand", "Hooks", "Component Architecture"],
    },
    {
      icon: <Wrench className="h-5 w-5" />,
      title: "Tools",
      skills: ["Vite", "Git", "Axios", "Chrome DevTools"],
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Practice Areas",
      skills: ["E-commerce UI", "Crypto Dashboards", "Landing Pages", "Responsive Design"],
    },
  ];

  return (
    <main className="min-h-screen bg-background text-white">
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
          Skills
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Technologies I use to build modern frontend interfaces
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
          I focus on the stack that helps me build responsive, maintainable, and scalable
          UI for portfolio sites, product pages, dashboards, and small web apps.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/7"
            >
              <div className="inline-flex rounded-xl border border-white/10 bg-white/10 p-3">
                {group.icon}
              </div>

              <h2 className="mt-4 text-xl font-semibold">{group.title}</h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
          <h2 className="text-2xl font-semibold">How I work</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm text-white/50">01</p>
              <p className="mt-2 font-medium">Reusable components</p>
              <p className="mt-2 text-sm text-white/70">
                I split UI into small pieces so the code is easier to reuse and maintain.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm text-white/50">02</p>
              <p className="mt-2 font-medium">Responsive layouts</p>
              <p className="mt-2 text-sm text-white/70">
                I design for mobile first, then scale layouts up for larger screens.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm text-white/50">03</p>
              <p className="mt-2 font-medium">Clean state flow</p>
              <p className="mt-2 text-sm text-white/70">
                I keep UI state predictable with tools like Zustand when the app needs it.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Skillspage;