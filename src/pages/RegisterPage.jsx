import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modal, setModal] = useState(null); // { type, message }
  const navigate = useNavigate();

  // 🔒 Lock scroll saat modal aktif
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);

  const openModal = (type, message) => {
    setModal({ type, message });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      openModal("error", "Password dan konfirmasi tidak sama");
      return;
    }

    localStorage.setItem(
      "registeredUser",
      JSON.stringify({ name, email, password })
    );

    openModal("success", "Registrasi berhasil 🎉");
  };

  const handleModalClose = () => {
    if (modal.type === "success") {
      setModal(null);
      setTimeout(() => navigate("/login"), 300);
    } else {
      setModal(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 px-4 relative">

      {/* MODAL */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

          <div className="relative bg-white rounded-3xl p-8 w-[90%] max-w-sm text-center shadow-2xl animate-scaleIn">
            <div
              className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                modal.type === "success" ? "bg-green-100" : "bg-red-100"
              }`}
            >
              <i
                className={`fas ${
                  modal.type === "success"
                    ? "fa-check text-green-500"
                    : "fa-times text-red-500"
                } text-2xl`}
              />
            </div>

            <h3 className="text-xl font-extrabold text-gray-800 mb-2">
              {modal.type === "success"
                ? "Registrasi Berhasil"
                : "Registrasi Gagal"}
            </h3>

            <p className="text-gray-500 text-sm mb-6">
              {modal.message}
            </p>

            <button
              onClick={handleModalClose}
              className="
                w-full flex items-center justify-center gap-2
                bg-gradient-to-r from-purple-500 to-pink-500
                text-white py-3 rounded-xl font-bold
                shadow-[0_12px_26px_rgba(168,85,247,0.45)]
                hover:shadow-[0_18px_34px_rgba(168,85,247,0.6)]
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <i className="fas fa-check-circle"></i>
              Oke
            </button>
          </div>
        </div>
      )}

      {/* REGISTER CARD */}
      <form
        onSubmit={handleRegister}
        className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-xs text-center"
      >
        <h2 className="text-2xl font-bold mb-5 text-purple-700">
          Register
        </h2>

        <label className="block mb-1 text-left font-medium text-gray-700">
          Nama Lengkap
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Nama Lengkap"
          required
        />

        <label className="block mb-1 text-left font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Email"
          required
        />

        <label className="block mb-1 text-left font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Password"
          required
        />

        <label className="block mb-1 text-left font-medium text-gray-700">
          Konfirmasi Password
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Konfirmasi Password"
          required
        />

        <button
          type="submit"
          disabled={!!modal}
          className="
            w-full bg-gradient-to-r from-purple-500 to-pink-500
            text-white py-2.5 rounded-xl font-bold
            shadow-md transition transform hover:-translate-y-1
            disabled:opacity-60 disabled:cursor-not-allowed
            mb-3 flex items-center justify-center gap-2 text-sm
          "
        >
          <i className="fas fa-user-plus"></i>
          Register
        </button>

        <p className="text-gray-500 text-sm">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-purple-600 font-semibold hover:underline">
            Login di sini
          </Link>
        </p>
      </form>

      <style>{`
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
}

export default RegisterPage;
