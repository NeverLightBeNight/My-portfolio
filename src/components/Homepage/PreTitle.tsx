import { Sparkles } from "lucide-react";

function PreTitle() {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
      <Sparkles className="h-4 w-4" />
      Modern Frontend Portfolio
    </div>
  );
}

export default PreTitle;
