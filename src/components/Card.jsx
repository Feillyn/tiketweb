import { useNavigate } from "react-router-dom";

function Card({
  id,
  title,
  price,
  img,
  location,
  city,
  date,
  time,
  category,
  isPopular = false,
  forceNew = false,
}) {
  const navigate = useNavigate();

  const today = new Date();
  const eventDate = date ? new Date(date) : null;

  const isExpired = eventDate && eventDate < today;
  const isNew =
    forceNew ||
    (eventDate &&
      eventDate >= today &&
      (eventDate - today) / (1000 * 60 * 60 * 24) <= 14);

  // warna kategori
  const categoryColors = {
    Seminar: "bg-purple-500",
    Konser: "bg-red-500",
    Kompetisi: "bg-orange-500",
    Pameran: "bg-blue-500",
  };

  return (
    <div
      className={`bg-white rounded-3xl shadow-md overflow-hidden
      transition-all duration-300
      ${
        isExpired
          ? "opacity-60 grayscale"
          : "hover:shadow-2xl hover:-translate-y-2"
      }`}
    >
      {/* IMAGE */}
      <div className="relative">
        <img
          src={img}
          alt={title}
          className="h-44 w-full object-cover"
        />

        {/* BADGES */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          {isPopular && (
            <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow animate-pulse">
              <i className="fas fa-fire mr-1"></i>
              Populer
            </span>
          )}

          {isNew && !isExpired && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow animate-pulse">
              <i className="fas fa-bolt mr-1"></i>
              Terbaru
            </span>
          )}

          {isExpired && (
            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
              <i className="fas fa-ban mr-1"></i>
              Kadaluarsa
            </span>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-2">
        <h4 className="font-semibold text-lg text-gray-800 line-clamp-2">
          {title}
        </h4>

        {/* KATEGORI */}
        {category && (
          <span
            className={`inline-flex items-center gap-1
            ${categoryColors[category] || "bg-gray-500"}
            text-white px-3 py-1 rounded-full text-xs font-semibold shadow`}
          >
            <i className="fas fa-tag"></i>
            {category}
          </span>
        )}

        {/* HARGA */}
        {price && (
          <p className="text-pink-600 font-bold text-lg pt-1">
            {price}
          </p>
        )}

        {/* BUTTON */}
        <button
          onClick={() => navigate(`/event/${id}`)}
          disabled={isExpired}
          className={`w-full mt-3 py-2 rounded-xl font-semibold text-white
          flex items-center justify-center gap-2
          ${
            isExpired
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
          }`}
        >
          {isExpired ? (
            <>
              <i className="fas fa-clock"></i>
              Event Berakhir
            </>
          ) : (
            <>
              <i className="fas fa-eye"></i>
              Lihat Detail
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Card;
