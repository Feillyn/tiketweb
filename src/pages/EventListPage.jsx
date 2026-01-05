import { useState } from "react";
import EventList from "../components/EventList";

function EventListPage() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-purple-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-12 pt-6">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
            Temukan Event Terbaik
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Eksplorasi berbagai event menarik sesuai passion dan minat kamu
          </p>
        </div>

        {/* SEARCH */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative">
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Cari event..."
              className="w-full rounded-2xl px-6 py-4 bg-white shadow-lg
                         focus:outline-none focus:ring-2 focus:ring-purple-300"
            />

            {keyword && (
              <button
                onClick={() => setKeyword("")}
                className="absolute right-4 top-1/2 -translate-y-1/2
                           text-gray-400 hover:text-red-500"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* FILTER CHIPS */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {["Seminar", "Konser", "Kompetisi", "Pameran"].map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setCategory(category === cat ? "" : cat)
              }
              className={`px-4 py-2 rounded-full border transition
                ${
                  category === cat
                    ? "bg-purple-600 text-white border-purple-600"
                    : "bg-white text-purple-600 border-purple-100 hover:bg-purple-50"
                }`}
            >
              {cat}
            </button>
          ))}

          {(keyword || category) && (
            <button
              onClick={() => {
                setKeyword("");
                setCategory("");
              }}
              className="px-4 py-2 rounded-full bg-red-50 text-red-500
                         border border-red-200 hover:bg-red-100 transition"
            >
              ✖ Clear All
            </button>
          )}
        </div>

        {/* EVENT LIST */}
        <div className="bg-white/70 rounded-3xl shadow-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-8">Event Terbaru</h2>

          <EventList filter={{ keyword, category }} />
        </div>

      </div>
    </div>
  );
}

export default EventListPage;
