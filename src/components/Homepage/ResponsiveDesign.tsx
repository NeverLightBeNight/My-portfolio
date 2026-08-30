import { ShieldCheck } from "lucide-react";

function ResponsiveDesign() {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <ShieldCheck className="h-6 w-6 text-white" />
      <h2 className="mt-4 text-xl font-semibold">Responsive design</h2>
      <p className="mt-2 text-sm text-white/70">
        Works well on mobile, tablet, and desktop with consistent spacing and
        hierarchy.
      </p>
    </article>
  );
}

export default ResponsiveDesign;
