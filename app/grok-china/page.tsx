import type { Metadata } from "next";
import { ArrowRight, Globe2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Grok 国内怎么使用？账号、登录、访问与付款教程",
  description:
    "面向国内用户整理 Grok 使用流程，包括账号准备、访问登录、付款问题、新手流程和购买账号服务注意事项。",
  alternates: {
    canonical: "/grok-china",
  },
};

const faqs = [
  { question: "Grok 国内怎么开始使用？", answer: "建议先确认账号、登录邮箱、访问环境和使用目的，再按教程完成登录、基础测试和会员状态确认。" },
  { question: "Grok 登录不了怎么办？", answer: "先记录错误提示，检查邮箱验证、密码、浏览器缓存和设备环境，避免短时间频繁尝试。" },
  { question: "付款失败应该重新付款吗？", answer: "不要急着重复付款。先确认是否扣款、订单状态和会员页面是否同步，再决定是否联系售后。" },
];

export default function GrokChinaPage() {
  return (
    <>
      <section className="bg-[#06111f] py-14 text-white">
        <div className="container-page">
          <Breadcrumb items={[{ label: "国内使用" }]} />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1.5 text-sm font-bold text-sky-100">
              <Globe2 className="h-4 w-4" aria-hidden="true" />
              国内使用指南
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">Grok 国内怎么使用？账号、登录、访问与付款教程</h1>
            <p className="mt-5 text-lg leading-8 text-sky-100/82">
              国内用户使用 Grok 时，问题往往不只在某一个环节。账号、访问、登录、付款、会员状态和售后材料都需要按顺序确认。
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f7fbff]">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["账号准备", "确认邮箱、密码、验证方式和账号归属，避免后续找回困难。"],
            ["登录访问", "固定常用设备和浏览器，遇到异常先截图，再按顺序排查。"],
            ["付款开通", "关注扣款状态、订单状态和会员页面显示，不要连续重复付款。"],
            ["售后材料", "保存订单号、邮箱、交付信息、错误提示和截图。"],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-black text-ink">新手使用流程</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              第一次使用不要急着处理复杂任务，建议先完成登录、会员状态确认和基础问答测试。确认账号能正常使用后，再逐步尝试中文写作、资料总结、搜索学习和代码辅助。
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
          <ol className="grid gap-4">
            {[
              ["确认账号", "确认你是自行注册、购买账号服务，还是需要先了解账号类型。"],
              ["完成登录", "使用常用设备和浏览器登录，保存邮箱、验证方式和错误提示。"],
              ["测试功能", "先测试中文问答、资料总结和搜索类任务，确认基础体验。"],
              ["遇到问题", "按账号、访问、付款、会员状态分类整理材料，再联系售后。"],
            ].map(([title, text], index) => (
              <li key={title} className="rounded-2xl border border-sky-100 bg-sky-50/70 p-5">
                <span className="text-sm font-black text-brand-700">步骤 {index + 1}</span>
                <h3 className="mt-2 text-lg font-black text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FAQSection title="国内使用常见问题" faqs={faqs} />
      <CTASection title="需要 Grok 国内使用帮助？" description="如果你希望节省账号准备和购买沟通时间，可以前往超哥 AI 服务查看相关账号服务。" />
    </>
  );
}
