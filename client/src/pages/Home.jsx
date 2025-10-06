import React from "react";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import ExclusiveOffer from "../components/ExclusiveOffer";
import Newsletter from "../components/Newsletter";
import Reviews from "../components/Reviews"

export default function Home() {
  return (
    <>
      <Hero />
      <Destination />
      <ExclusiveOffer />
      <Newsletter />
      <Reviews />
    </>
  );
}
