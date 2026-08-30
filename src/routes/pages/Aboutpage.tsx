import { Code2, LayoutGrid, Rocket, ShieldCheck } from "lucide-react";

function Aboutpage() {
  const stats = [
    { title: "Frontend focus", value: "React + TS" }, 
    { title: "Responsive UI", value: "Mobile-first" },
    { title: "State management", value: "Zustand" },
    { title: "Routing", value: "React Router" },
  ];

  const strengths = [
    {
      icon: <LayoutGrid className="h-5 w-5" />,
      title: "Component structure",
      text: "I build interfaces from reusable blocks so the project stays scalable and easy to maintain.",
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Clean React code",
      text: "I focus on readable props, predictable state flow, and separating UI from logic.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Responsive design",
      text: "Layouts are adapted for mobile, tablet, and desktop with consistent spacing and hierarchy.",
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Product thinking",
      text: "I care not only about visuals, but also about usability, navigation, and feature clarity.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
            About me
          </p>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                I build modern frontend interfaces with focus on quality and usability.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                I work with React, TypeScript, Tailwind, React Router, and Zustand to create
                responsive interfaces for portfolios, dashboards, and product websites.
                My goal is to build UI that is clean, fast, and easy to scale in a real team.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {stats.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-xl font-semibold">What I focus on</h2>
              <ul className="mt-5 space-y-4 text-sm text-white/75">
                <li>• Reusable components and clean file structure.</li>
                <li>• Responsive layouts that work across devices.</li>
                <li>• Predictable state management for UI and application logic.</li>
                <li>• Maintainable code that is easy to review in a team.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Strengths</h2>
          <p className="mt-3 max-w-2xl text-white/65">
            This section is structured like a typical portfolio about page: short narrative,
            key skills, and cards with clear value points.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {strengths.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/7"
            >
              <div className="inline-flex rounded-xl border border-white/10 bg-white/10 p-3">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Aboutpage;