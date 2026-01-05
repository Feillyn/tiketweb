import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const { user, logout, updateUser } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || "");
  const [editing, setEditing] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-400 text-lg">
          Silakan login terlebih dahulu
        </p>
      </div>
    );
  }

  const handleEditSave = () => {
    if (editing) {
      updateUser({ ...user, name });
      setSuccess(true); // ✅ buka modal
    }
    setEditing(!editing);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 px-4 relative">
      
      {/* SUCCESS MODAL */}
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* BACKDROP */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

          {/* MODAL */}
          <div className="relative bg-white rounded-3xl p-8 w-[90%] max-w-sm text-center shadow-2xl animate-scaleIn">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <i className="fas fa-check text-green-500 text-2xl"></i>
            </div>

            <h3 className="text-xl font-extrabold text-gray-800 mb-2">
              Profil Diperbarui
            </h3>

            <p className="text-gray-500 text-sm mb-6">
              Perubahan profil berhasil disimpan
            </p>

            <button
              onClick={() => setSuccess(false)}
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

      {/* PROFILE CARD */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm text-center">
        
        {/* Avatar */}
        <div className="relative w-28 h-28 mx-auto mb-5">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-5xl font-bold text-white shadow-lg ring-4 ring-purple-300">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full animate-pulse" />
        </div>

        {/* Name */}
        <div className="mb-2">
          {editing ? (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-center focus:outline-none focus:ring-2 focus:ring-purple-400 transition w-full"
            />
          ) : (
            <h2 className="text-2xl font-semibold">{user.name}</h2>
          )}
        </div>

        {/* Email */}
        <p className="text-gray-500 mb-6">{user.email}</p>
        <div className="h-[1px] bg-gray-200 mb-6" />

        {/* EDIT / SAVE */}
        <button
          onClick={handleEditSave}
          className={`
            w-full flex items-center justify-center gap-2
            text-white py-3 rounded-xl font-bold
            shadow-md transition transform hover:-translate-y-1
            ${
              editing
                ? "bg-gradient-to-r from-green-400 to-green-500"
                : "bg-gradient-to-r from-purple-500 to-pink-500"
            }
          `}
        >
          <i className={`fas ${editing ? "fa-save" : "fa-edit"}`}></i>
          {editing ? "Simpan" : "Edit Profil"}
        </button>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="
            w-full flex items-center justify-center gap-2 mt-3
            bg-gradient-to-r from-red-400 to-red-500
            text-white py-3 rounded-xl font-bold
            shadow-md transition transform hover:-translate-y-1
          "
        >
          <i className="fas fa-sign-out-alt"></i>
          Logout
        </button>
      </div>

      {/* MODAL ANIMATION */}
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

export default ProfilePage;
