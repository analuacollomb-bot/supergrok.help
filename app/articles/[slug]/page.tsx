import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import ArticleFixedCTA from "@/components/ArticleFixedCTA";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import SEOJsonLd from "@/components/SEOJsonLd";
import { siteConfig } from "@/config/site";
import { articleToPlainText, articles, getArticleBySlug, getRelatedArticles } from "@/data/articles";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "文章未找到",
    };
  }

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      type: "article",
      publishedTime: article.date,
      url: `${siteConfig.siteUrl}/articles/${article.slug}`,
      images: ["/supergrok-help-hero.png"],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(article);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seoDescription,
    image: `${siteConfig.siteUrl}/supergrok-help-hero.png`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: siteConfig.brandName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brandName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/brand-avatar.png`,
      },
    },
    mainEntityOfPage: `${siteConfig.siteUrl}/articles/${article.slug}`,
    articleBody: articleToPlainText(article),
    inLanguage: "zh-CN",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
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
      <SEOJsonLd data={[articleJsonLd, faqJsonLd]} />
      <article className="pb-28">
        <section className="bg-[#06111f] py-12 text-white">
          <div className="container-page">
            <Breadcrumb items={[{ label: "教程", href: "/articles" }, { label: article.title }]} />
            <div className="mt-8 max-w-4xl">
              <span className="rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1.5 text-sm font-bold text-sky-100">
                {article.category}
              </span>
              <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">{article.title}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-sky-100/82">{article.excerpt}</p>
              <div className="mt-5 flex items-center gap-2 text-sm text-sky-100/70">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                <time dateTime={article.date}>发布时间：{article.date}</time>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7fbff] py-10">
          <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,760px)_1fr]">
            <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm sm:p-9">
              <div className="prose-article">
                {article.content.map((section) => (
                  <section key={section.heading}>
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    <h3>{section.subheading}</h3>
                    <p>{section.subparagraph}</p>
                  </section>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-sky-100 bg-sky-50 p-5">
                <h2 className="text-2xl font-black text-ink">文章底部提示</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  需要 Grok / SuperGrok 账号服务？可以前往超哥 AI 服务自助下单。下单前请确认商品说明、交付方式和售后范围。
                </p>
                <a
                  href={siteConfig.articleOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-700"
                >
                  前往超哥 AI 服务自助下单
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <aside className="space-y-5">
              <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black text-ink">相关阅读</h2>
                <div className="mt-4 grid gap-3">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/articles/${item.slug}`}
                      className="rounded-2xl bg-sky-50 p-4 text-sm font-bold leading-6 text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black text-ink">购买前提醒</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  本站只做第三方教程和服务说明。所有购买按钮跳转到超哥 AI 服务，请在服务站确认商品信息后再下单。
                </p>
              </div>
            </aside>
          </div>
        </section>

        <FAQSection title="本文 FAQ" faqs={article.faqs} />
        <section className="bg-white pb-12">
          <div className="container-page">
            <h2 className="text-3xl font-black text-ink">相关文章推荐</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </section>
      </article>
      <CTASection />
      <ArticleFixedCTA />
    </>
  );
}
