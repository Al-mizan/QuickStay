import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllRooms from "./pages/AllRooms";

export default function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div className="min-h-screen flex flex-col">
      {!isOwnerPath && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
