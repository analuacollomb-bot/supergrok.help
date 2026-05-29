import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  title = "需要 Grok / SuperGrok 账号服务？",
  description = "下单前建议先阅读页面说明，确认账号类型、使用场景与售后规则，再前往超哥 AI 服务自助下单。",
  primaryLabel = "前往超哥 AI 服务自助下单",
  secondaryLabel = "查看常见问题",
  secondaryHref = "/faq",
}: CTASectionProps) {
  return (
    <section className="bg-brand-600 py-14 text-white">
      <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-black leading-tight">{title}</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-sky-50">{description}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={siteConfig.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-bold text-brand-700 transition hover:bg-sky-50"
          >
            {primaryLabel}
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-base font-bold text-white transition hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
