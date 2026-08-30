import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PreTitle from "../../components/Homepage/PreTitle";
import Title from "../../components/Homepage/Title";
import InfoUnderTitle from "../../components/Homepage/InfoUnderTitle";
import { about, contacts } from "../path.json";
import FastUI from "../../components/Homepage/FastUI";
import ResponsiveDesign from "../../components/Homepage/ResponsiveDesign";
import ModernStyle from "../../components/Homepage/ModernStyle";

function Homepage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center md:px-8 lg:py-28">
          <PreTitle />
          <Title />
          <InfoUnderTitle />

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to={about}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02]"
            >
              About me
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to={contacts}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <FastUI />
          <ResponsiveDesign />
          <ModernStyle />
        </div>
      </section>
    </main>
  );
}

export default Homepage;
