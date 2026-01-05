import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(null); // { type, message }
  const navigate = useNavigate();
  const { login } = useAuth();

  // 🔒 Lock scroll saat modal aktif
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);

  const openModal = (type, message) => {
    setModal({ type, message });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!savedUser) {
      openModal("error", "Belum ada akun, silakan register terlebih dahulu");
      return;
    }

    if (email !== savedUser.email || password !== savedUser.password) {
      openModal("error", "Email atau password salah");
      return;
    }

    login("mock-token-123", {
      name: savedUser.name,
      email: savedUser.email,
    });

    openModal("success", "Login berhasil 🎉");
  };

  const handleModalClose = () => {
    if (modal.type === "success") {
      setModal(null);
      setTimeout(() => navigate("/"), 300);
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
              {modal.type === "success" ? "Berhasil" : "Gagal Login"}
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

      {/* LOGIN CARD */}
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-purple-700">
          Login
        </h2>

        <label className="block mb-2 text-left font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 px-4 py-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Email"
          required
        />

        <label className="block mb-2 text-left font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 px-4 py-3 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Password"
          required
        />

        <button
          type="submit"
          disabled={!!modal}
          className="
            w-full bg-gradient-to-r from-purple-500 to-pink-500
            text-white py-3 rounded-xl font-bold
            shadow-md transition transform hover:-translate-y-1
            disabled:opacity-60 disabled:cursor-not-allowed
          "
        >
          <i className="fas fa-sign-in-alt mr-2"></i>
          Login
        </button>

        <p className="mt-4 text-gray-500">
          Belum punya akun?{" "}
          <Link to="/register" className="text-purple-600 font-semibold hover:underline">
            Daftar di sini
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

export default LoginPage;
