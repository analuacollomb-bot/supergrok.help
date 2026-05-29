import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import Breadcrumb from "@/components/Breadcrumb";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Grok / SuperGrok 教程文章列表",
  description:
    "浏览 30 篇 Grok / SuperGrok 中文 SEO 教程，覆盖国内使用、购买开通、账号服务、登录付款、功能对比和提示词入门。",
  alternates: {
    canonical: "/articles",
  },
};

export default function ArticlesPage() {
  return (
    <>
      <section className="bg-[#06111f] py-14 text-white">
        <div className="container-page">
          <Breadcrumb items={[{ label: "教程" }]} />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1.5 text-sm font-bold text-sky-100">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              教程文章
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">Grok / SuperGrok 教程文章</h1>
            <p className="mt-5 text-lg leading-8 text-sky-100/82">
              按国内用户常见搜索需求整理 30 篇教程，适合从账号、登录、购买、付款、功能和使用场景逐步了解。
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f7fbff]">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
