import { Code2, Database, Palette, Wrench } from "lucide-react";
import PreTitle from "../../components/Skills/PreTitle";
import Title from "../../components/Skills/Title";
import InfoUnderTitle from "../../components/Skills/InfoUnderTitle";
import ReusableCard from "../../components/Skills/ReusableCard";
import ResponsiveCard from "../../components/Skills/ResponsiveCard";
import CleanCard from "../../components/Skills/CleanCard";

function Skillspage() {
  type skillGroupsType = {
    icon: React.ReactNode;
    title: string;
    skills: string[];
  };

  const skillGroups: skillGroupsType[] = [
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "React",
      ],
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
      skills: [
        "E-commerce UI",
        "Crypto Dashboards",
        "Landing Pages",
        "Responsive Design",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#0c0b10] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_35%,transparent_100%)]" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
          <div className="max-w-3xl">
            <PreTitle />
            <div className="mt-4">
              <Title />
            </div>
            <div className="mt-5 max-w-2xl text-white/70">
              <InfoUnderTitle />
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-3xl border border-white/10 bg-white/8 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/12"
              >
                <div className="inline-flex rounded-2xl border border-white/10 bg-white/10 p-3 text-cyan-300 shadow-lg shadow-cyan-500/10">
                  {group.icon}
                </div>

                <h2 className="mt-4 text-xl font-semibold text-white">
                  {group.title}
                </h2>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <section className="mt-16 rounded-3xl border border-white/10 bg-white/8 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
            <h2 className="text-2xl font-semibold text-white">How I work</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <ReusableCard />
              <ResponsiveCard />
              <CleanCard />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Skillspage;
