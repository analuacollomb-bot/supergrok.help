import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CircleHelp, Compass, ListChecks } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Hero from "@/components/Hero";
import SEOJsonLd from "@/components/SEOJsonLd";
import { siteConfig } from "@/config/site";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "SuperGrok Help｜Grok 国内使用、购买与开通教程",
  description:
    "SuperGrok Help 提供 Grok / SuperGrok 国内使用教程、购买说明、账号服务介绍、常见问题与新手指南，帮助用户了解 Grok AI 的使用方式。",
  alternates: {
    canonical: "/",
  },
};

const homeFaqs = [
  {
    question: "SuperGrok Help 是做什么的？",
    answer:
      "本站整理 Grok / SuperGrok 的中文使用教程、购买前说明、账号服务介绍和常见问题，帮助用户先理解使用方式，再决定是否需要前往第三方服务站下单。",
  },
  {
    question: "国内用户使用 Grok 一般会遇到哪些问题？",
    answer:
      "常见问题包括访问环境不稳定、登录验证失败、付款失败、会员未及时显示、账号类型不清楚和售后沟通资料不完整。本站会按场景拆解这些问题。",
  },
  {
    question: "本站可以直接购买 Grok / SuperGrok 吗？",
    answer:
      "本站不在页面内完成交易。所有购买按钮都会跳转到超哥 AI 服务，用户需要在服务站阅读商品说明并自助下单。",
  },
  {
    question: "下单前最需要确认什么？",
    answer:
      "建议确认账号类型、交付时间、使用限制、售后范围、联系渠道和是否适合自己的使用频率。遇到问题时保留订单号、邮箱和截图。",
  },
];

const quickGuides = [
  {
    title: "SuperGrok 购买前说明",
    text: "了解 SuperGrok 适合哪些人、和普通 Grok 有什么区别，以及国内用户下单前要确认什么。",
    href: "/supergrok",
  },
  {
    title: "Grok 国内使用教程",
    text: "按账号、登录、访问、付款和首次使用流程拆解，适合刚接触 Grok 的中文用户。",
    href: "/grok-china",
  },
  {
    title: "Grok 账号服务说明",
    text: "说明独享账号、账号交付、登录习惯和售后材料准备，不做夸张承诺。",
    href: "/grok-account",
  },
  {
    title: "常见问题 FAQ",
    text: "集中查看购买、登录失败、付款失败、账号安全、发货和中文体验等问题。",
    href: "/faq",
  },
];

export default function HomePage() {
  const recommended = articles.slice(0, 8);

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brandName,
    url: siteConfig.siteUrl,
    description: metadata.description,
    inLanguage: "zh-CN",
  };

  return (
    <>
      <SEOJsonLd data={websiteJsonLd} />
      <Hero />

      <section className="section-padding bg-[#f7fbff]">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-bold text-brand-700">
              <Compass className="h-4 w-4" aria-hidden="true" />
              新手入口
            </div>
            <h2 className="mt-4 text-3xl font-black leading-tight text-ink">从这 4 个入口开始了解 Grok</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              本站按教程站方式组织内容：先解释 Grok / SuperGrok 是什么，再梳理国内用户常见的账号、登录、访问、付款和售后问题。每个入口都尽量用清单和步骤说明，方便被搜索引擎理解，也方便新手快速定位问题。
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {quickGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-100 hover:shadow-soft"
              >
                <h3 className="text-lg font-black text-ink group-hover:text-brand-700">{guide.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-7 text-slate-600">{guide.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-700">
                  查看说明
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-bold text-brand-700">
              <ListChecks className="h-4 w-4" aria-hidden="true" />
              新手阅读路径
            </div>
            <h2 className="mt-4 text-3xl font-black text-ink">建议按问题类型阅读，而不是直接下单</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              如果你只是想了解 Grok，先看国内使用和提示词教程；如果你已经明确需要 SuperGrok，再看购买前说明；如果已经下单或拿到账号，再看登录、风控和售后材料相关内容。
            </p>
          </div>
          <div className="grid gap-4">
            {[
              ["第一次了解 Grok", "先阅读《Grok 国内怎么使用？2026 最新完整教程》和 FAQ。"],
              ["准备开通 SuperGrok", "重点看 SuperGrok 区别、会员是否值得买、付款失败和生效时间。"],
              ["已经遇到问题", "按登录、充值、付款、账号风控分类排查，并保存截图。"],
            ].map(([title, text], index) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-sky-100 bg-sky-50/70 p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-black text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-black text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f7fbff]">
        <div className="container-page grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-2xl border border-sky-100 bg-white p-7 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-bold text-brand-700">
              <CircleHelp className="h-4 w-4" aria-hidden="true" />
              国内用户常见问题
            </div>
            <h2 className="mt-4 text-3xl font-black text-ink">问题通常集中在访问、登录、付款和账号类型</h2>
            <div className="mt-6 grid gap-4">
              {[
                ["访问与登录", "页面加载、验证码、密码、设备切换和浏览器缓存都可能影响登录结果。"],
                ["付款与开通", "付款失败、扣款状态、会员显示延迟，需要按订单和账号状态分别判断。"],
                ["账号服务", "独享号、共享号、成品号的使用边界不同，购买前要看清说明。"],
                ["售后沟通", "售后问题建议提供订单号、邮箱、截图和发生时间，减少反复确认。"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl bg-sky-50 p-4">
                  <h3 className="font-black text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white p-7 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-bold text-brand-700">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              教程覆盖内容
            </div>
            <h2 className="mt-4 text-3xl font-black text-ink">文章会持续围绕这些主题扩展</h2>
            <div className="mt-6 grid gap-4">
              {[
                ["基础教程", "注册、登录、中文使用、提示词、新手流程。"],
                ["购买前说明", "SuperGrok 区别、会员判断、付款失败、订阅取消。"],
                ["账号与售后", "独享账号、成品号、风控、交付后如何开始使用。"],
                ["场景对比", "学生、创作者、程序员、跨境电商和工具对比。"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl bg-sky-50 p-4">
                  <h3 className="font-black text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-black text-ink">推荐教程文章</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                从国内使用、SuperGrok 购买、账号注册、登录问题到提示词入门，适合新手按顺序阅读。
              </p>
            </div>
            <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-bold text-brand-700">
              查看全部文章
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {recommended.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <FAQSection title="首页常见问题" description="购买前建议先读这些问题，确认本站定位和跳转路径。" faqs={homeFaqs} />
      <CTASection />
    </>
  );
}
