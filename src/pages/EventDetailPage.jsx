import { useParams, useNavigate } from "react-router-dom";
import EventsData from "../data/EventsData";

function EventDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = EventsData.find((e) => e.id === id);

  if (!event) {
    return (
      <p className="text-center mt-24 text-gray-400">
        Event tidak ditemukan
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">

      {/* IMAGE */}
      <div className="relative mb-8 sm:mb-10">
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-3xl shadow-xl"
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 to-transparent" />

        {/* CATEGORY BADGE */}
        {event.category && (
          <span
            className="absolute top-4 left-4 px-3 py-1
                       rounded-full text-xs font-bold
                       bg-white/90 text-purple-600 shadow
                       flex items-center gap-2"
          >
            <i className="fas fa-tag text-xs"></i>
            {event.category}
          </span>
        )}
      </div>

      {/* CONTENT CARD */}
      <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-6 md:p-8 -mt-20 sm:-mt-24 relative">

        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800 mb-3">
          {event.title}
        </h1>

        {/* PRICE */}
        <p className="text-pink-600 font-bold text-base sm:text-lg md:text-xl mb-5">
          {event.price}
        </p>

        {/* INFO */}
        <div className="space-y-2 text-gray-700 mb-6 text-sm sm:text-base">
          <p className="flex items-center gap-2">
            <i className="fas fa-calendar-alt text-purple-500 text-sm"></i>
            <span className="font-semibold">Tanggal:</span> {event.date}
          </p>
          <p className="flex items-center gap-2">
            <i className="fas fa-clock text-purple-500 text-sm"></i>
            <span className="font-semibold">Waktu:</span> {event.time}
          </p>
          <p className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-purple-500 text-sm"></i>
            <span className="font-semibold">Lokasi:</span> {event.location}
          </p>
          <p className="flex items-center gap-2">
            <i className="fas fa-city text-purple-500 text-sm"></i>
            <span className="font-semibold">Kota:</span> {event.city}
          </p>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
          {event.description}
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3">
          
          {/* BELI */}
          <button
            onClick={() => navigate("/checkout", { state: event })}
            className="flex-1 py-2.5 rounded-xl font-semibold text-white
                       bg-gradient-to-r from-purple-500 to-pink-500
                       shadow-md shadow-pink-500/30
                       hover:brightness-110 hover:scale-[1.02]
                       active:scale-[0.97]
                       transition-all duration-300
                       flex items-center justify-center gap-2 text-sm"
          >
            <i className="fas fa-ticket-alt text-sm"></i>
            Beli Tiket
          </button>

          {/* KEMBALI */}
          <button
            onClick={() => navigate(-1)}
            className="flex-1 py-2.5 rounded-xl font-semibold
                       bg-white text-purple-600
                       border border-purple-300
                       shadow-sm shadow-purple-300/30
                       hover:bg-purple-50 hover:scale-[1.02]
                       active:scale-[0.97]
                       transition-all duration-300
                       flex items-center justify-center gap-2 text-sm"
          >
            <i className="fas fa-arrow-left text-sm"></i>
            Kembali
          </button>

        </div>
      </div>
    </div>
  );
}

export default EventDetailPage;
