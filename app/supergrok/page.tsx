import type { Metadata } from "next";
import { ArrowRight, Layers3, Sparkles } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ProductCard from "@/components/ProductCard";
import SEOJsonLd from "@/components/SEOJsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "SuperGrok 是什么？国内用户购买与使用说明",
  description:
    "了解 SuperGrok 的适用人群、与普通 Grok 的区别、国内用户购买和使用注意事项，以及第三方账号服务下单入口。",
  alternates: {
    canonical: "/supergrok",
  },
};

const faqs = [
  {
    question: "SuperGrok 适合所有人购买吗？",
    answer: "不一定。高频写作、搜索、代码、学习或资料分析用户更容易感受到价值，低频尝鲜用户建议先了解普通 Grok 的基础体验。",
  },
  {
    question: "国内用户购买前要注意什么？",
    answer: "建议确认账号类型、交付方式、会员状态、生效时间、售后范围和登录注意事项，尤其要保存订单号、邮箱和页面截图。",
  },
  {
    question: "购买按钮会跳转到哪里？",
    answer: "所有购买按钮都会跳转到超哥 AI 服务，用户需要在服务站阅读商品说明后自助下单。",
  },
];

export default function SuperGrokPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "SuperGrok 使用与账号服务说明",
      description: metadata.description,
      category: "AI account service information",
      url: `${siteConfig.siteUrl}/supergrok`,
      image: `${siteConfig.siteUrl}/brand-avatar.png`,
      offers: {
        "@type": "Offer",
        url: siteConfig.orderUrl,
        availability: "https://schema.org/InStock",
        priceCurrency: "CNY",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "SuperGrok 第三方教程与购买前说明",
      provider: {
        "@type": "Organization",
        name: siteConfig.serviceName,
      },
      areaServed: "CN",
      url: siteConfig.orderUrl,
    },
  ];

  return (
    <>
      <SEOJsonLd data={jsonLd} />
      <section className="bg-[#06111f] py-14 text-white">
        <div className="container-page">
          <Breadcrumb items={[{ label: "SuperGrok" }]} />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1.5 text-sm font-bold text-sky-100">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              SuperGrok 教程
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">SuperGrok 是什么？国内用户购买与使用说明</h1>
            <p className="mt-5 text-lg leading-8 text-sky-100/82">
              SuperGrok 更适合高频使用 Grok 的用户。购买前建议先看清能力差异、账号类型、使用频率和售后边界，再决定是否前往服务站下单。
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f7fbff]">
        <div className="container-page grid gap-5 md:grid-cols-3">
          <ProductCard
            title="SuperGrok 是什么"
            description="可以理解为更适合高频和深度任务的 Grok 使用方案。"
            points={["适合更长时间的问答和资料处理", "适合写作、学习、代码和检索场景", "购买前仍需确认实际可用范围"]}
          />
          <ProductCard
            title="适合哪些人"
            description="重点看使用频率，而不是只看功能名称。"
            points={["每天需要 AI 辅助工作或学习", "经常遇到额度或效率瓶颈", "愿意按说明保存账号和订单材料"]}
          />
          <ProductCard
            title="购买注意事项"
            description="国内用户更应关注登录、付款和售后沟通。"
            points={["确认账号类型和交付方式", "不要多人异常共用账号", "遇到问题先截图再联系售后"]}
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-bold text-brand-700">
              <Layers3 className="h-4 w-4" aria-hidden="true" />
              对比说明
            </div>
            <h2 className="mt-4 text-3xl font-black text-ink">SuperGrok 和普通 Grok 区别</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              普通 Grok 更适合入门体验和轻量任务，SuperGrok 更偏向高频、深度和连续使用。真正需要升级的人，往往已经有明确工作流，例如每天要整理资料、写长文、做代码分析或持续搜索学习。
            </p>
            <a
              href={siteConfig.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-base font-bold text-white transition hover:bg-brand-700"
            >
              前往超哥 AI 服务下单
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl border border-sky-100">
            <table className="w-full border-collapse bg-white text-left text-sm">
              <thead className="bg-sky-50 text-ink">
                <tr>
                  <th className="p-4">维度</th>
                  <th className="p-4">普通 Grok</th>
                  <th className="p-4">SuperGrok</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky-100 text-slate-600">
                {[
                  ["适用频率", "轻量体验、偶尔使用", "高频工作、学习、创作"],
                  ["任务复杂度", "常规问答和基础总结", "更长内容、复杂分析、连续追问"],
                  ["购买判断", "先体验再决定", "明确需求后再开通"],
                  ["注意事项", "关注账号和访问稳定性", "额外关注会员状态与售后材料"],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={cell} className="p-4 align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQSection title="SuperGrok 常见问题" faqs={faqs} />
      <CTASection title="准备开通 SuperGrok？" description="请先确认使用频率和账号类型，再前往超哥 AI 服务查看商品说明并自助下单。" />
    </>
  );
}
