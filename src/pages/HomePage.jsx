import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Events from "../components/Events";
import Footer from "../components/Footer";

function HomePage() {

  return (
    <>
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Stats />

        {/* Event Populer */}
        <Events />

      
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
