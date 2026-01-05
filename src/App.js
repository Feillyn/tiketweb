import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import EventDetailPage from "./pages/EventDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProtectedRoute from "./components/ProtectedRoute";
import EventListPage from "./pages/EventListPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* EVENT LIST */}
        <Route path="/events" element={<EventListPage />} />

        {/* AUTH */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* DETAIL EVENT */}
        <Route path="/event/:id" element={<EventDetailPage />} />

        {/* CHECKOUT */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />

        {/* PROFILE */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
