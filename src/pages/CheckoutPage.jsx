import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function CheckoutPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  if (!state) {
    return (
      <p className="text-center mt-24 text-gray-400 text-sm sm:text-base">
        Tidak ada data event
      </p>
    );
  }

  const handleCheckout = () => {
    setSuccess(true);
  };

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 py-10 sm:py-12 relative">
      {/* SUCCESS MODAL */}
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* BACKDROP */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

          {/* MODAL */}
          <div className="relative bg-white rounded-3xl p-6 sm:p-8 w-full max-w-sm text-center shadow-2xl animate-scaleIn">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <i className="fas fa-check text-green-500 text-xl sm:text-2xl"></i>
            </div>

            <h3 className="text-lg sm:text-xl font-extrabold text-gray-800 mb-2">
              Pembayaran Berhasil
            </h3>

            <p className="text-gray-500 text-sm mb-6">
              Tiket kamu berhasil dipesan 🎉
            </p>

            <button
              onClick={() => navigate("/")}
              className="
                w-full flex items-center justify-center gap-2
                bg-gradient-to-r from-purple-500 to-pink-500
                text-white py-3 rounded-xl font-bold text-sm sm:text-base
                shadow-[0_12px_26px_rgba(168,85,247,0.45)]
                hover:shadow-[0_18px_34px_rgba(168,85,247,0.6)]
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <i className="fas fa-home"></i>
              Kembali ke Home
            </button>
          </div>
        </div>
      )}

      {/* CARD */}
      <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-800 mb-6 text-center">
          Checkout Tiket
        </h2>

        {/* EVENT INFO */}
        <div className="mb-6 sm:mb-8">
          <p className="text-gray-700 font-semibold text-base sm:text-lg">
            {state.title}
          </p>
          <p className="text-pink-600 font-bold text-lg sm:text-xl mt-1">
            {state.price}
          </p>
        </div>

        <div className="h-[1px] bg-gray-200 mb-6" />

        {/* ACTION BUTTONS */}
        <div className="flex flex-col gap-4">
          <button
            onClick={handleCheckout}
            className="
              flex items-center justify-center gap-2
              bg-gradient-to-r from-green-400 to-green-500
              text-white py-3 rounded-xl font-bold text-sm sm:text-base
              shadow-[0_12px_26px_rgba(34,197,94,0.45)]
              hover:shadow-[0_18px_34px_rgba(34,197,94,0.6)]
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <i className="fas fa-credit-card"></i>
            Bayar Sekarang
          </button>

          <button
            onClick={() => navigate(-1)}
            className="
              flex items-center justify-center gap-2
              bg-gradient-to-r from-purple-100 to-pink-100
              text-purple-700 py-3 rounded-xl font-bold text-sm sm:text-base
              border border-purple-200
              shadow-[0_10px_22px_rgba(168,85,247,0.25)]
              hover:shadow-[0_16px_30px_rgba(168,85,247,0.35)]
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <i className="fas fa-arrow-left"></i>
            Kembali
          </button>
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
}

export default CheckoutPage;
