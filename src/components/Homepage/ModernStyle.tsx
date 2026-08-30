import { Sparkles } from "lucide-react";

function ModernStyle() {
  return (
    <article className="group rounded-2xl border border-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl hover:shadow-black/20">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-cyan-400 transition-colors group-hover:bg-white/15">
        <Sparkles className="h-6 w-6" />
      </div>

      <h2 className="mt-4 text-xl font-semibold text-white">Modern style</h2>
      <p className="mt-2 text-sm leading-6 text-white/70">
        Dark visual language, subtle gradients, soft borders, and polished
        call-to-actions.
      </p>
    </article>
  );
}

export default ModernStyle;
