import React from "react";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Destination from "./components/Destination";
import ExclusiveOffer from "./components/ExclusiveOffer";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <>
      {!isOwnerPath && <Navbar />}
      {/* <Hero /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Destination />
      <ExclusiveOffer />
      <Reviews />
      <Footer /> 
    </>
  );
}
