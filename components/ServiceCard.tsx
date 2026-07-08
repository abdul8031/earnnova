import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-transform duration-300 group-hover:scale-110">
        <Icon size={32} />
      </div>

      <h3 className="mb-3 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mb-6 text-gray-600 leading-7">
        {description}
      </p>

      <Link
        href="#"
        className="inline-flex items-center font-semibold text-blue-600 transition-all duration-300 group-hover:translate-x-1"
      >
        Learn More →
      </Link>
    </div>
  );
}