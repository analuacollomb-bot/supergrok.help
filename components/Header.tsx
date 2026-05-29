import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { navItems, siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-400/20 bg-[#06111f]/88 backdrop-blur-xl">
      <div className="container-page flex min-h-[72px] items-center justify-between gap-4 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="SuperGrok Help 首页">
          <span className="relative h-11 w-11 overflow-hidden rounded-full border border-sky-300/50 shadow-[0_0_28px_rgba(59,163,255,0.42)]">
            <Image
              src="/brand-avatar.png"
              alt="SuperGrok Help 品牌头像"
              width={88}
              height={88}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold text-white">{siteConfig.brandName}</span>
            <span className="text-xs font-medium text-sky-200/80">Grok 使用教程站</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="主导航">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-sky-100/82 transition hover:bg-sky-400/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={siteConfig.navOrderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-sky-400 px-4 py-2.5 text-sm font-bold text-[#06111f] shadow-[0_0_30px_rgba(56,189,248,0.32)] transition hover:bg-sky-300"
        >
          前往下单
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <nav className="container-page flex gap-2 overflow-x-auto pb-3 lg:hidden" aria-label="移动导航">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full border border-sky-300/20 bg-white/8 px-3 py-2 text-sm font-semibold text-sky-100"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
