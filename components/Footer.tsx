import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems, siteConfig } from "@/config/site";
import Disclaimer from "@/components/Disclaimer";

export default function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-white">
      <div className="container-page grid gap-8 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-lg font-bold text-ink">{siteConfig.brandName}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
            面向中文用户整理 Grok / SuperGrok 使用、购买前说明、账号服务与常见问题，帮助新手更快判断是否适合自己。
          </p>
          <div className="mt-5">
            <a
              href={siteConfig.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2.5 text-sm font-bold text-brand-700 transition hover:border-brand-200 hover:bg-brand-100"
            >
              前往{siteConfig.serviceName}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-bold text-ink">网站导航</p>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-brand-700">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-bold text-ink">服务说明</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            <Link href="/contact" className="hover:text-brand-700">
              联系客服
            </Link>
            <Link href="/faq" className="hover:text-brand-700">
              常见问题
            </Link>
            <Link href="/articles" className="hover:text-brand-700">
              教程文章
            </Link>
          </div>
        </div>
      </div>

      <div className="container-page pb-8">
        <Disclaimer />
      </div>
    </footer>
  );
}
