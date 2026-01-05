import { useState, useEffect, useMemo } from "react";

function Stats() {
  const data = useMemo(
    () => [
      { value: 120, label: "Event", suffix: "+" },
      { value: 50000, label: "Pengguna", suffix: "K+" },
      { value: 98, label: "Kepuasan", suffix: "%" },
    ],
    []
  );

  const [counts, setCounts] = useState(data.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) => {
          if (val < data[i].value) {
            const increment = Math.ceil(data[i].value / 50);
            return Math.min(val + increment, data[i].value);
          }
          return val;
        })
      );
    }, 20);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <section className="relative max-w-6xl mx-auto py-16 md:py-24 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Background soft pastel particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-2xl animate-float"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: `rgba(${Math.floor(Math.random() * 150 + 80)}, ${Math.floor(
                Math.random() * 150 + 80
              )}, ${Math.floor(Math.random() * 150 + 80)}, 0.2)`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {data.map((item, i) => (
        <div
          key={i}
          className="relative rounded-3xl p-8 text-center shadow-md border border-transparent bg-gradient-to-r from-pink-100 via-purple-100 to-yellow-100 hover:from-pink-200 hover:via-purple-200 hover:to-yellow-200 transition transform hover:-translate-y-1 hover:scale-105 duration-500"
        >
          <h3 className="text-3xl sm:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 drop-shadow-md animate-fade-in">
            {counts[i].toLocaleString()}
            {item.suffix}
          </h3>
          <p className="mt-3 text-gray-700 font-semibold">{item.label}</p>
        </div>
      ))}

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); opacity: 0.3; }
            50% { opacity: 0.6; }
            100% { transform: translateY(-20px); opacity: 0; }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}

export default Stats;
