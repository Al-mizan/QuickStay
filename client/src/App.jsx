import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destination from "./components/Destination";
import ExclusiveOffer from "./components/ExclusiveOffer";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destination />
      <ExclusiveOffer />
      <Reviews />
      <Footer />
    </>
  );
}
