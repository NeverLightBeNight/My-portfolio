import { Code2, LayoutGrid, Rocket, ShieldCheck } from "lucide-react";
import PreTitle from "../../components/Homepage/PreTitle";
import Title from "../../components/Aboutpage/Title";
import InfoUnderTitle from "../../components/Aboutpage/InfoUnderTitle";
import FocusOn from "../../components/Aboutpage/FocusOn";
import Strengths from "../../components/Aboutpage/Strengths";

function Aboutpage() {
  type IStats = {
    title: string;
    value: string;
  };

  type IStrengths = {
    icon: React.ReactNode;
    title: string;
    text: string;
  };

  const stats: IStats[] = [
    { title: "Frontend focus", value: "React + TS" },
    { title: "Responsive UI", value: "Mobile-first" },
    { title: "State management", value: "Zustand" },
    { title: "Routing", value: "React Router" },
  ];

  const strengths: IStrengths[] = [
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
    <main className="min-h-screen bg-[#0c0b10] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20 xl:py-24">
          <div className="max-w-3xl">
            <PreTitle />
            <div className="mt-4">
              <Title />
            </div>
            <div className="mt-5 max-w-2xl text-white/70">
              <InfoUnderTitle />
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/8 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl"
              >
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                  {item.title}
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20 xl:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] xl:gap-10">
          <div className="rounded-3xl border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
            <FocusOn />
          </div>

          <div className="space-y-4">
            <div className="max-w-2xl">
              <Strengths />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {strengths.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/8 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/12"
                >
                  <div className="inline-flex rounded-2xl border border-white/10 bg-white/10 p-3 text-cyan-300 shadow-lg shadow-cyan-500/10">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Aboutpage;
