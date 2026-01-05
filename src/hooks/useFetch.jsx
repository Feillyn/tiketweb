import { useEffect, useState } from "react";
import img1 from "../assets/images/1.jpeg";
import img2 from "../assets/images/2.jpeg";
import img3 from "../assets/images/3.jpeg";

function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // simulasi API
        await new Promise((res) => setTimeout(res, 800));

        setData([
          {
            id: "1",
            title: "Digital Marketing Seminar",
            price: "Rp200.000",
            img: img1,
          },
          {
            id: "2",
            title: "Startup Workshop",
            price: "Rp300.000",
            img: img2,
          },
          {
            id: "3",
            title: "City Fun Run 5K",
            price: "Rp150.000",
            img: img3,
          },
        ]);
      } catch (err) {
        setError("Gagal mengambil data event");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

export default useFetch;
