import React from "react";
import Card from "./Card";

export default function Destination() {
  return (
    <div className="container items-center justify-center text-center py-20">
      <div className="max-w-3xl mx-auto py-15">
        <h1 className="text-4xl font-['Playfair_Display'] mb-4">
          Featured Destination
        </h1>
        <p className="text-md text-gray-500">
          Discover our handpicked selection of exceptional properties around the
          world, offering unparalleled luxury and unforgettable experiences.
        </p>
      </div>
      <Card />
    </div>
  );
}
