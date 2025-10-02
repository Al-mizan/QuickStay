import React from "react";
import ExclusiveOfferCard from "./ExclusiveOfferCard";
import { exclusiveOffers } from "../assets/assets";
import { TiArrowRightOutline } from "react-icons/ti";

export default function ExclusiveOffer() {
  return (
    <div className="container mx-auto max-w-[1700px] z-50 sm:px-8 md:px-10 lg:px-20 xl:px-32 items-center justify-center pb-5">
      <div className="flex flex-row justify-between items-center">
        <div>
          <div className="text-4xl font-['Playfair_Display'] mb-4">
            Exclusive Offers
          </div>
          <div className="text-md text-gray-500 max-w-3xl">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </div>
        </div>
        <button type="button" className="btn btn-primary my-20 group">
          View All Offers
          <TiArrowRightOutline className="ml-1 text-xl transform transition-all duration-200 group-hover:translate-x-2" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exclusiveOffers.map((offer, index) => (
          <ExclusiveOfferCard key={index} {...offer} />
        ))}
      </div>
    </div>
  );
}
