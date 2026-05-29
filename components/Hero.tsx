import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#06111f]">
      <Image
        src="/supergrok-help-hero.png"
        alt="SuperGrok Help 深蓝科技风格的 Grok 使用教程背景"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030814] via-[#06111f]/82 to-[#06111f]/18" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f7fbff] to-transparent" />
      <div className="container-page relative z-10 grid min-h-[620px] items-center gap-10 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1.5 text-sm font-semibold text-sky-100">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            第三方教程与服务说明
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Grok / SuperGrok 中文教程帮助中心
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-sky-100/86">
            汇总 Grok 国内使用、SuperGrok 购买前说明、账号登录问题和新手 FAQ，帮助中文用户按步骤了解 Grok AI。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/articles"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3.5 text-base font-bold text-[#06111f] shadow-[0_0_36px_rgba(56,189,248,0.34)] transition hover:bg-sky-300"
            >
              浏览教程文章
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <a
              href={siteConfig.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-300/34 bg-white/8 px-6 py-3.5 text-base font-bold text-white backdrop-blur transition hover:bg-white/14"
            >
              前往{siteConfig.serviceName}下单
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-sky-100/82 sm:grid-cols-3">
            {["中文教程整理", "购买前说明", "新手流程清晰"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_14px_rgba(125,211,252,0.8)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="tech-panel ml-auto max-w-md rounded-3xl p-6">
            <div className="flex items-center gap-4">
              <Image
                src="/brand-avatar.png"
                alt="SuperGrok Help 品牌 AI 顾问头像"
                width={104}
                height={104}
                className="h-20 w-20 rounded-full border border-sky-300/50 object-cover shadow-[0_0_30px_rgba(56,189,248,0.32)]"
              />
              <div>
                <p className="text-sm font-semibold text-sky-200">SuperGrok Help</p>
                <p className="mt-1 text-xl font-black text-white">Grok 使用导航台</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              {["国内使用完整教程", "SuperGrok 开通指南", "登录付款问题 FAQ"].map((item) => (
                <div key={item} className="rounded-2xl border border-sky-300/18 bg-white/8 px-4 py-3 text-sm font-semibold text-sky-50">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
