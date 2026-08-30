import { MapPin } from "lucide-react";

function Card3() {
  return (
    <article className="flex h-full items-start gap-4 rounded-3xl border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/10">
      <div className="shrink-0 rounded-2xl border border-white/10 bg-white/10 p-3 text-cyan-300">
        <MapPin className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-sm text-white/50">Location</p>
        <p className="mt-1 text-sm font-medium text-white">Moscow, Russia</p>
      </div>
    </article>
  );
}

export default Card3;
