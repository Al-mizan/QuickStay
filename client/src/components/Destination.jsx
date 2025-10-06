import React from "react";
import DestinationCard from "./DestinationCard";
import { roomsDummyData } from "../assets/assets";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

export default function Destination() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto max-w-[1700px] z-50 sm:px-8 md:px-10 lg:px-20 xl:px-32 items-center justify-center text-center pt-15 pb-5">
      <Title
        title="Featured Destinations"
        subtitle="Discover our handpicked selection of exceptional properties around the
        world, offering unparalleled luxury and unforgettable experiences."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <DestinationCard key={room._id} room={room} index={index} />
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/rooms");
          scrollTo(0, 0);
        }}
        type="button"
        className="btn btn-primary my-20"
      >
        View All Destinations
      </button>
    </div>
  );
}
