import { Zap } from "lucide-react";

function FastUI() {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <Zap className="h-6 w-6 text-white" />
      <h2 className="mt-4 text-xl font-semibold">Fast UI</h2>
      <p className="mt-2 text-sm text-white/70">
        Lightweight components, clean layout structure, and optimized render
        flow.
      </p>
    </article>
  );
}

export default FastUI;
