"use client";

export default function Sponsors() {
  const sponsors = [
    { name: "TechCorp" },
    { name: "InnovaX" },
    { name: "CodeSpark" },
    { name: "NextGen Labs" },
    { name: "DataSoft" },
    { name: "GreenFuture" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Our Sponsors</h1>
      <p className="text-center text-gray-600 mb-10">
        Big thanks to our sponsors who make this possible.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xs text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-600">{sponsor.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
