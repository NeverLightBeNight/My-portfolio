import { CircleArrowRight, Mail } from "lucide-react";

function Card1() {
  return (
    <article className="rounded-2xl border border-white/10 flex flex-col gap-4 bg-white/5 p-6 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-white/10 bg-white/10 p-3">
          <Mail className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-white/50">Email</p>
          <p className="font-medium">selinmedkid@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-white/10 bg-white/10 p-3">
          <CircleArrowRight className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-white/50">GitHub</p>
          <a
            className="font-medium"
            href="https://github.com/NeverLightBeNight"
            target="_blank"
          >
            https://github.com/NeverLightBeNight
          </a>
        </div>
      </div>
    </article>
  );
}

export default Card1;
