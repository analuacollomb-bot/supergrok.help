import { CheckCircle2 } from "lucide-react";

type ProductCardProps = {
  title: string;
  description: string;
  points: string[];
};

export default function ProductCard({ title, description, points }: ProductCardProps) {
  return (
    <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-black text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      <ul className="mt-5 grid gap-3">
        {points.map((point) => (
          <li key={point} className="flex gap-2 text-sm leading-6 text-slate-600">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
