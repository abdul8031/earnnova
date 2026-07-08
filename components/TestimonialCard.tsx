interface TestimonialCardProps {
  name: string;
  country: string;
  review: string;
}

export default function TestimonialCard({
  name,
  country,
  review,
}: TestimonialCardProps) {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600 transition-transform duration-300 group-hover:scale-110">
          {name.charAt(0)}
        </div>

        <div>
          <h3 className="font-bold text-gray-900">{name}</h3>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">{country}</span>

            <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-600">
              Verified
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 text-yellow-400 text-xl">
        ★★★★★
      </div>

      <p className="mt-5 leading-7 text-gray-600">
        "{review}"
      </p>
    </div>
  );
}