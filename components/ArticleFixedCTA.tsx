import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ArticleFixedCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sky-100 bg-white/94 py-3 shadow-[0_-12px_40px_rgba(20,151,232,0.12)] backdrop-blur-xl">
      <div className="container-page flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-black text-ink">需要 Grok / SuperGrok 账号服务？</p>
          <p className="text-xs text-slate-500">前往超哥 AI 服务自助下单</p>
        </div>
        <a
          href={siteConfig.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-700"
        >
          前往下单
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
