import React from "react";
import DestinationCard from "./DestinationCard";
import { roomsDummyData } from "../assets/assets";

export default function Destination() {
  return (
    <div className="container mx-auto max-w-[1700px] z-50 sm:px-8 md:px-10 lg:px-20 xl:px-32 items-center justify-center text-center pt-15 pb-5">
      <div className="max-w-3xl mx-auto py-15">
        <h1 className="text-4xl font-['Playfair_Display'] mb-4">
          Featured Destinations
        </h1>
        <p className="text-md text-gray-500">
          Discover our handpicked selection of exceptional properties around the
          world, offering unparalleled luxury and unforgettable experiences.
        </p> 
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <DestinationCard key={room._id} room={room} index={index} />
        ))}
      </div>
      <div>
        <button type="button" className="btn btn-primary my-20">
          View All Destinations
        </button>
      </div>
    </div>
  );
}
