import { ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Disclaimer() {
  return (
    <div className="rounded-2xl border border-sky-100 bg-sky-50/70 p-4 text-sm leading-7 text-slate-600">
      <div className="flex gap-3">
        <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
        <p>{siteConfig.disclaimer}</p>
      </div>
    </div>
  );
}
