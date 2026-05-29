import type { Metadata } from "next";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ProductCard from "@/components/ProductCard";
import SEOJsonLd from "@/components/SEOJsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Grok 账号服务介绍｜独享账号、使用注意事项与售后说明",
  description:
    "介绍 Grok 账号服务、独享账号说明、使用注意事项、售后沟通材料和前往超哥 AI 服务自助下单入口。",
  alternates: {
    canonical: "/grok-account",
  },
};

const faqs = [
  { question: "Grok 独享账号是什么意思？", answer: "独享账号通常强调单个用户独立使用，隐私和登录责任更清晰，但仍需按服务说明和平台规则规范使用。" },
  { question: "账号服务购买后要注意什么？", answer: "首次登录建议使用固定设备，保存交付信息，不要多人异常共用，不要频繁修改安全信息。" },
  { question: "售后问题需要提供什么？", answer: "建议提供订单号、登录邮箱、错误截图、发生时间和你已经尝试过的处理方式。" },
];

export default function GrokAccountPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Grok 账号服务说明",
      description: metadata.description,
      category: "AI account service information",
      url: `${siteConfig.siteUrl}/grok-account`,
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
      name: "Grok 账号服务与售后说明",
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
          <Breadcrumb items={[{ label: "账号服务" }]} />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1.5 text-sm font-bold text-sky-100">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              账号服务说明
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">Grok 账号服务介绍</h1>
            <p className="mt-5 text-lg leading-8 text-sky-100/82">
              这里重点说明账号服务适合什么人、独享账号如何理解、购买后如何登录使用，以及遇到问题时怎样准备售后材料。
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f7fbff]">
        <div className="container-page grid gap-5 md:grid-cols-3">
          <ProductCard
            title="账号服务介绍"
            description="适合希望节省账号准备、付款沟通和开通流程时间的用户。"
            points={["下单前阅读商品说明", "确认账号类型和交付方式", "按说明保存订单和账号资料"]}
          />
          <ProductCard
            title="独享账号说明"
            description="独享更适合长期、稳定和隐私边界更清晰的使用。"
            points={["适合个人长期学习或工作", "不建议多人共用同一账号", "登录环境尽量保持稳定"]}
          />
          <ProductCard
            title="售后说明"
            description="售后沟通的关键是材料完整、问题分类清楚。"
            points={["提供订单号和邮箱", "提供错误提示截图", "说明发生时间和操作步骤"]}
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black text-ink">使用注意事项</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              账号交付后，建议使用固定设备和常用浏览器完成首次登录，不要频繁切换环境，不要把账号资料随意转发给陌生人，也不要进行违反平台规则的自动化或异常操作。
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              如果出现登录失败、会员状态异常或付款状态不明确，先保留截图和时间线，再联系售后。清楚说明问题，比重复尝试更容易解决。
            </p>
          </div>
          <div className="rounded-3xl border border-sky-100 bg-sky-50/70 p-7">
            <h2 className="text-3xl font-black text-ink">下单前阅读说明</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              所有购买入口都会跳转到超哥 AI 服务。请在服务站确认商品说明、交付时间、售后规则和联系方式，再根据自己的使用场景下单。
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
        </div>
      </section>

      <FAQSection title="账号服务常见问题" faqs={faqs} />
      <CTASection title="查看 Grok 账号服务" description="购买前请确认账号类型、使用边界和售后规则，适合后再前往服务站自助下单。" />
    </>
  );
}
