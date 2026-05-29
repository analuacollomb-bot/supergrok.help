import type { Metadata } from "next";
import { ArrowRight, Headphones } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "联系 SuperGrok Help｜客服、下单说明与售后材料",
  description:
    "联系页面说明如何前往超哥 AI 服务、下单前阅读说明，以及售后问题需要准备订单号、邮箱和截图。",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#06111f] py-14 text-white">
        <div className="container-page">
          <Breadcrumb items={[{ label: "联系" }]} />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1.5 text-sm font-bold text-sky-100">
              <Headphones className="h-4 w-4" aria-hidden="true" />
              联系客服
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">联系客服与售后说明</h1>
            <p className="mt-5 text-lg leading-8 text-sky-100/82">
              如果你需要购买 Grok / SuperGrok 账号服务，请前往超哥 AI 服务查看商品说明。售后问题请提前准备订单号、邮箱和截图。
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f7fbff]">
        <div className="container-page grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-sky-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black text-ink">前往超哥 AI 服务</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              本站不在页面内处理交易。请点击按钮跳转到超哥 AI 服务，阅读商品说明、交付方式和售后规则后自助下单。
            </p>
            <a
              href={siteConfig.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-base font-bold text-white transition hover:bg-brand-700"
            >
              前往超哥 AI 服务
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-5">
            {[
              ["下单前阅读说明", "确认账号类型、是否独享、会员状态、交付时间、使用限制、售后范围和联系方式。"],
              ["售后问题准备材料", "请提供订单号、邮箱、支付截图、错误提示截图、发生时间和已尝试的操作。"],
              ["沟通建议", "把问题按账号、登录、付款、会员状态或功能使用分类描述，客服更容易快速判断。"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black text-ink">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="准备下单或咨询？" description="下单前请先确认服务说明；售后沟通时带上订单号、邮箱和截图，会更容易定位问题。" />
    </>
  );
}
