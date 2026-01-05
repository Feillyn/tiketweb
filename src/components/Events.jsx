import Card from "./Card";
import useFetch from "../hooks/useFetch";

function Events() {
  const { data: eventsData, loading, error } = useFetch();

  // Mapping kategori default kalau data belum punya category
  const categoryMap = {
    1: "Seminar",
    2: "Seminar",
    3: "Seminar",
    4: "Pameran",
    5: "Pameran",
    6: "Konser",
    7: "Seminar",
    8: "Kompetisi",
    9: "Pameran",
    10: "Seminar",
    11: "Seminar",
    12: "Seminar",
  };

  if (loading) {
    return (
      <p className="text-center py-20 text-gray-400">
        Loading event...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center py-20 text-red-500">
        {error}
      </p>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-purple-700">
        🔥 Event Populer
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsData.map((event) => (
          <Card
            key={event.id}
            id={event.id}
            title={event.title}
            price={event.price}
            img={event.img}
            category={event.category || categoryMap[event.id] || "Umum"} // pakai mapping
            isPopular   // 🔥 Populer
            forceNew    // 🆕 Terbaru
          />
        ))}
      </div>
    </section>
  );
}

export default Events;
