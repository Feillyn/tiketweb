import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/login");
  };

  const menuItems = [
    { name: "Home", path: "/", icon: "fas fa-home" },
    { name: "Profil", path: "/profile", auth: true, icon: "fas fa-user" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold hover:text-yellow-100 transition duration-300"
        >
          <i className="fas fa-ticket-alt animate-bounce"></i> TixEvent
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          {menuItems.map(
            (item, idx) =>
              (!item.auth || (item.auth && user)) && (
                <Link
                  key={idx}
                  to={item.path}
                  className={`flex items-center gap-1 px-2 py-1 hover:text-yellow-100 transition ${
                    location.pathname === item.path
                      ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-yellow-100 after:rounded-full relative"
                      : ""
                  }`}
                >
                  <i className={`${item.icon}`}></i>
                  {item.name}
                </Link>
              )
          )}

          {user ? (
            <>
              <span className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-sm animate-pulse">
                Hi, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full bg-red-400 text-white hover:bg-red-500 shadow-md transition font-semibold flex items-center gap-1"
              >
                <i className="fas fa-sign-out-alt"></i> Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded-full bg-white text-purple-600 hover:bg-yellow-50 shadow-md transition font-semibold flex items-center gap-1"
            >
              <i className="fas fa-sign-in-alt"></i> Login
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
        >
          <i className={`fas ${open ? "fa-times" : "fa-bars"} transition-transform duration-300`}></i>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-r from-purple-400 to-pink-400 shadow-md text-white">
          <div className="px-6 py-4 flex flex-col gap-4">
            {menuItems.map(
              (item, idx) =>
                (!item.auth || (item.auth && user)) && (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 text-lg font-medium hover:text-yellow-100 transition"
                  >
                    <i className={`${item.icon}`}></i>
                    {item.name}
                  </Link>
                )
            )}

            {user ? (
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 rounded-full bg-red-400 text-white hover:bg-red-500 shadow-md transition font-semibold flex items-center gap-1 justify-center"
              >
                <i className="fas fa-sign-out-alt"></i> Logout
              </button>
            ) : (
              <Link
                onClick={() => setOpen(false)}
                to="/login"
                className="w-full px-4 py-2 rounded-full bg-white text-purple-600 hover:bg-yellow-50 shadow-md transition font-semibold flex items-center gap-1 justify-center"
              >
                <i className="fas fa-sign-in-alt"></i> Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
