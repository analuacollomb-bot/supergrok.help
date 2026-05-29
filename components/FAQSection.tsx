import { HelpCircle } from "lucide-react";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  title?: string;
  description?: string;
  faqs: FAQItem[];
};

export default function FAQSection({
  title = "常见问题",
  description,
  faqs,
}: FAQSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-bold text-brand-700">
            <HelpCircle className="h-4 w-4" aria-hidden="true" />
            FAQ
          </div>
          <h2 className="mt-4 text-3xl font-black text-ink">{title}</h2>
          {description ? <p className="mt-3 text-base leading-7 text-slate-600">{description}</p> : null}
        </div>

        <div className="mt-8 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-sky-100 bg-sky-50/60 p-5">
              <summary className="cursor-pointer list-none text-base font-bold text-ink marker:hidden">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-brand-700">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
