import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600"
          alt="Event"
          className="w-full h-full object-cover scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/80 via-black/50 to-pink-700/80" />
      </div>

      {/* FLOATING BLOBS */}
      <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-36 text-center">
        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/15 backdrop-blur border border-white/20 text-sm">
          🎟️ Platform Event Terpercaya
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-yellow-300 via-white to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
            Tiket Event
          </span>
          <br />
          <span className="text-white drop-shadow-lg">Tanpa Ribet</span>
        </h1>

        {/* SUBTITLE */}
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Seminar, workshop, konser, festival — semua event favoritmu
          <span className="text-yellow-300 font-semibold">
            {" "}
            dalam satu platform
          </span>
        </p>

        {/* CTA */}
        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          {/* PRIMARY CTA */}
          <Link
            to="/events"
            className="px-10 py-3 rounded-2xl font-bold text-white
                       bg-gradient-to-r from-purple-500 to-pink-500
                       shadow-lg shadow-pink-500/30
                       hover:brightness-110 hover:scale-[1.03]
                       active:scale-[0.97]
                       transition-all duration-300"
          >
            Lihat Event
          </Link>

          {/* SECONDARY CTA */}
          <Link
            to="/register"
            className="px-10 py-3 rounded-2xl font-bold
                       border border-white/70 text-white
                       hover:bg-white hover:text-purple-700
                       transition-all duration-300"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>

      {/* WAVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24">
          <path
            d="M0,0V46.29c47.29,22.6,104.12,27.48,158,12,
               70-21,135-76,207-81s135,45,206,69,
               135,14,206-15,135-76,206-81,
               135,45,206,69,135,14,206-15V0Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
