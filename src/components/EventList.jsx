import Card from "./Card";

const normalEvents = [
  {
    id: "4",
    title: "Festival Kuliner Nusantara",
    price: "Gratis",
    img: "/images/4.jpeg",
    date: "2026-01-12",
    category: "Pameran",
  },
  {
    id: "5",
    title: "Pameran Seni Lokal",
    price: "Rp50.000",
    img: "/images/5.jpeg",
    date: "2025-12-01",
    category: "Pameran",
  },
  {
    id: "6",
    title: "Konser Akustik",
    price: "Rp100.000",
    img: "/images/6.jpeg",
    date: "2025-12-20",
    category: "Konser",
  },
  {
    id: "7",
    title: "Workshop Fotografi",
    price: "Rp150.000",
    img: "/images/7.jpeg",
    date: "2025-12-05",
    category: "Seminar",
  },
  {
    id: "8",
    title: "Event Gaming Tournament",
    price: "Rp75.000",
    img: "/images/8.jpeg",
    date: "2025-12-28",
    category: "Kompetisi",
  },
  {
    id: "9",
    title: "Bazar UMKM",
    price: "Gratis",
    img: "/images/9.jpeg",
    date: "2025-11-30",
    category: "Pameran",
  },
  {
    id: "10",
    title: "Stand Up Comedy Night",
    price: "Rp120.000",
    img: "/images/10.jpeg",
    date: "2025-12-18",
    category: "Seminar",
  },
  {
    id: "11",
    title: "Tech Meetup",
    price: "Gratis",
    img: "/images/11.jpeg",
    date: "2025-12-03",
    category: "Seminar",
  },
  {
    id: "12",
    title: "Yoga & Wellness Day",
    price: "Rp80.000",
    img: "/images/12.jpeg",
    date: "2026-01-05",
    category: "Seminar",
  },
];

function EventList({ filter }) {
  const keyword = filter?.keyword?.toLowerCase() || "";
  const category = filter?.category || "";

  const filteredEvents = normalEvents.filter((event) => {
    // 🔍 search → title saja
    const matchTitle =
      !keyword ||
      event.title.toLowerCase().includes(keyword);

    // 🏷️ kategori → exact match
    const matchCategory =
      !category || event.category === category;

    return matchTitle && matchCategory;
  });

  return (
    <section className="py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <Card
            key={event.id}
            id={event.id}
            title={event.title}
            price={event.price}
            img={event.img}
            date={event.date}
            category={event.category}
            isPopular
            forceNew
          />
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <p className="text-center text-gray-400 mt-16">
          Event tidak ditemukan
        </p>
      )}
    </section>
  );
}

export default EventList;
