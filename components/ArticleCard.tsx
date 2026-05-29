import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { Article } from "@/data/articles";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-100 hover:shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
          {article.category}
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
          {article.date}
        </span>
      </div>
      <h2 className="mt-4 text-xl font-black leading-snug text-ink group-hover:text-brand-700">
        <Link href={`/articles/${article.slug}`}>{article.title}</Link>
      </h2>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{article.excerpt}</p>
      <Link
        href={`/articles/${article.slug}`}
        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-700"
      >
        阅读教程
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
