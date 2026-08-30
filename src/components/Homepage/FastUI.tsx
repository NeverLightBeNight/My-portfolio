import { Zap } from "lucide-react";

function FastUI() {
  return (
    <article className="group rounded-2xl border border-white/10 bg-linear-to-b from-white/10 to-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-yellow-400 transition-colors group-hover:bg-white/15">
        <Zap className="h-6 w-6" />
      </div>

      <h2 className="mt-4 text-xl font-semibold text-white">Fast UI</h2>
      <p className="mt-2 text-sm leading-6 text-white/70">
        Lightweight components, clean layout structure, and optimized render
        flow.
      </p>
    </article>
  );
}

export default FastUI;
