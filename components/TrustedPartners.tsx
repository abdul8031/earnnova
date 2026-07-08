export default function TrustedPartners() {
  const partners = [
    "EasyPaisa",
    "JazzCash",
    "USDT (TRC20)",
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">

          <h2 className="text-center text-gray-700 text-lg font-semibold mb-8">
            Supported Payment Methods
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {partners.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center h-20 rounded-xl border border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-500 transition-all duration-300"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {partner}
                </span>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}