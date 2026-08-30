import { Mail } from "lucide-react";

function Card1() {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-white/10 bg-white/10 p-3">
          <Mail className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-white/50">Email</p>
          <p className="font-medium">yourmail@example.com</p>
        </div>
      </div>
    </article>
  );
}

export default Card1;
