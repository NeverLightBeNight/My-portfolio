import { CircleArrowRight, Mail } from "lucide-react";

function Card1() {
  return (
    <article className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/10">
      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-2xl border border-white/10 bg-white/10 p-3 text-cyan-300">
          <Mail className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-white/50">Email</p>
          <a
            href="mailto:selinmedkid@gmail.com"
            className="mt-1 block wrap-break-word text-sm font-medium text-white transition-colors hover:text-cyan-300"
          >
            selinmedkid@gmail.com
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-2xl border border-white/10 bg-white/10 p-3 text-cyan-300">
          <CircleArrowRight className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-white/50">GitHub</p>
          <a
            href="https://github.com/NeverLightBeNight"
            target="_blank"
            rel="noreferrer"
            className="mt-1 block break-all text-sm font-medium text-white transition-colors hover:text-cyan-300"
          >
            NeverLightBeNight
          </a>
        </div>
      </div>
    </article>
  );
}

export default Card1;
