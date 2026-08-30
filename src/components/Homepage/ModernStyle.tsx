import { Sparkles } from "lucide-react";

function ModernStyle() {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <Sparkles className="h-6 w-6 text-white" />
      <h2 className="mt-4 text-xl font-semibold">Modern style</h2>
      <p className="mt-2 text-sm text-white/70">
        Dark visual language, subtle gradients, soft borders, and polished
        call-to-actions.
      </p>
    </article>
  );
}

export default ModernStyle;
