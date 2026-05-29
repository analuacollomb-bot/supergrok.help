import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-[#f7fbff] py-24">
      <div className="container-page rounded-3xl border border-sky-100 bg-white p-8 text-center shadow-sm">
        <h1 className="text-3xl font-black text-ink">页面未找到</h1>
        <p className="mt-3 text-slate-600">你访问的页面不存在，可能是链接地址已经变化。</p>
        <Link
          href="/articles"
          className="mt-6 inline-flex rounded-full bg-brand-600 px-6 py-3 font-bold text-white transition hover:bg-brand-700"
        >
          查看教程文章
        </Link>
      </div>
    </section>
  );
}
