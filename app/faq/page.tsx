import type { Metadata } from "next";
import { MessageCircleQuestion } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import SEOJsonLd from "@/components/SEOJsonLd";

export const metadata: Metadata = {
  title: "Grok / SuperGrok 常见问题 FAQ",
  description:
    "整理 SuperGrok 怎么购买、Grok 国内怎么用、登录失败、账号安全、发货时间、售后联系、是否支持中文等常见问题。",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  {
    question: "SuperGrok 怎么购买？",
    answer: "本站所有购买按钮都会跳转到超哥 AI 服务。下单前请阅读商品说明，确认账号类型、开通方式、交付时间和售后规则。",
  },
  {
    question: "Grok 国内怎么用？",
    answer: "建议先准备账号、邮箱和稳定的登录设备，完成登录后测试中文问答、搜索、写作和资料总结等基础功能。",
  },
  {
    question: "Grok 登录不了怎么办？",
    answer: "先确认页面是否能打开、邮箱验证码是否正常、密码是否正确、浏览器缓存是否影响，再保存错误截图联系售后。",
  },
  {
    question: "Grok 账号安全吗？",
    answer: "账号安全和账号类型、登录习惯、密码管理、是否多人共用、是否遵守平台规则都有关系。购买前需要看清服务说明。",
  },
  {
    question: "购买后多久发货？",
    answer: "具体交付时间以超哥 AI 服务商品页面说明为准。建议保存订单号、邮箱和支付截图，方便查询订单状态。",
  },
  {
    question: "售后怎么联系？",
    answer: "售后问题建议通过服务站提供的联系方式处理，并提供订单号、邮箱、问题截图和发生时间。",
  },
  {
    question: "本站和 xAI / Grok 有隶属关系吗？",
    answer: "没有。本站为第三方教程与服务说明站，用于整理中文使用说明、购买前提醒和常见问题。",
  },
  {
    question: "Grok 是否支持中文？",
    answer: "Grok 可以处理中文问答、总结、写作、翻译和学习类任务。中文效果与提示词清晰度、上下文和任务复杂度有关。",
  },
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEOJsonLd data={jsonLd} />
      <section className="bg-[#06111f] py-14 text-white">
        <div className="container-page">
          <Breadcrumb items={[{ label: "FAQ" }]} />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1.5 text-sm font-bold text-sky-100">
              <MessageCircleQuestion className="h-4 w-4" aria-hidden="true" />
              常见问题
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">Grok / SuperGrok 常见问题 FAQ</h1>
            <p className="mt-5 text-lg leading-8 text-sky-100/82">
              围绕购买、国内使用、登录、账号安全、发货、售后和中文体验，整理新手最常见的问题。
            </p>
          </div>
        </div>
      </section>
      <FAQSection title="全部 FAQ" faqs={faqs} />
      <CTASection title="还有购买前疑问？" description="建议先阅读商品说明，再前往超哥 AI 服务自助下单；售后问题请准备订单号、邮箱和截图。" />
    </>
  );
}
