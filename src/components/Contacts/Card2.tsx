import { Phone } from "lucide-react";

function Card2() {
  return (
    <article className="flex h-full items-start gap-4 rounded-3xl border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/10">
      <div className="shrink-0 rounded-2xl border border-white/10 bg-white/10 p-3 text-cyan-300">
        <Phone className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-sm text-white/50">Phone</p>
        <a
          href="tel:+79891934909"
          className="mt-1 block text-sm font-medium text-white transition-colors hover:text-cyan-300"
        >
          +7 (989) 193-49-09
        </a>
      </div>
    </article>
  );
}

export default Card2;
