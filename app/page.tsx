import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleHelp, Compass, Rocket, Users } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
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

export default function HomePage() {
  const recommended = articles.slice(0, 6);

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
        <div className="container-page grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-bold text-brand-700">
              <Compass className="h-4 w-4" aria-hidden="true" />
              Grok / SuperGrok 简介
            </div>
            <h2 className="mt-4 text-3xl font-black leading-tight text-ink">
              先看懂能力、账号和开通方式，再决定是否下单
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Grok 是面向问答、搜索、写作、代码、资料整理等场景的 AI 工具。SuperGrok 通常更适合高频使用、需要更高额度或更深度处理任务的用户。本站以中文教程方式整理新手路径，帮助你把账号、访问、付款和售后问题拆清楚。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <ProductCard
              title="SuperGrok 使用说明"
              description="适合想了解 SuperGrok 能力、差异和购买前注意事项的用户。"
              points={["适合高频写作、学习、搜索和代码任务", "购买前先确认账号类型与使用频率", "遇到问题先按教程准备截图和订单信息"]}
            />
            <ProductCard
              title="Grok 账号服务说明"
              description="围绕账号交付、登录、独享号、售后材料和使用习惯进行说明。"
              points={["不把账号服务描述成平台直属渠道", "强调合规使用和账号责任", "所有下单入口统一跳转服务站"]}
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-bold text-brand-700">
              <Users className="h-4 w-4" aria-hidden="true" />
              适合哪些人使用
            </div>
            <h2 className="mt-4 text-3xl font-black text-ink">把 Grok 变成稳定的学习和工作助手</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["学生与自学用户", "整理知识框架、解释概念、生成复习提纲和练习题。"],
              ["内容创作者", "辅助选题、标题、脚本、长文改写和热点资料整理。"],
              ["跨境与运营人员", "生成多语言客服回复、Listing 草稿和竞品分析框架。"],
              ["程序员与技术用户", "解释代码、排查报错、生成测试思路和学习新框架。"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-sky-100 bg-sky-50/70 p-6">
                <CheckCircle2 className="h-6 w-6 text-mint" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-black text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f7fbff]">
        <div className="container-page grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-3xl border border-sky-100 bg-white p-7 shadow-sm">
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

          <div className="rounded-3xl border border-sky-100 bg-white p-7 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-bold text-brand-700">
              <Rocket className="h-4 w-4" aria-hidden="true" />
              购买 / 开通流程
            </div>
            <h2 className="mt-4 text-3xl font-black text-ink">四步完成下单前判断</h2>
            <ol className="mt-6 grid gap-4">
              {[
                ["阅读教程", "先确认 Grok、SuperGrok、账号服务分别解决什么问题。"],
                ["选择类型", "根据使用频率、是否独享、是否需要会员能力选择合适方案。"],
                ["前往下单", "点击按钮跳转到超哥 AI 服务，阅读商品说明后自助下单。"],
                ["保存材料", "购买后保存订单号、邮箱、交付信息和异常截图，方便售后。"],
              ].map(([title, text], index) => (
                <li key={title} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <span>
                    <strong className="block text-ink">{title}</strong>
                    <span className="mt-1 block text-sm leading-7 text-slate-600">{text}</span>
                  </span>
                </li>
              ))}
            </ol>
            <a
              href={siteConfig.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-base font-bold text-white transition hover:bg-brand-700"
            >
              前往{siteConfig.serviceName}下单
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
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
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
