import React from "react";
import ExclusiveOfferCard from "./ExclusiveOfferCard";
import { exclusiveOffers } from "../assets/assets";
import { TiArrowRightOutline } from "react-icons/ti";
import Title from "./Title";

export default function ExclusiveOffer() {
  return (
    <div className="container mx-auto max-w-[1700px] -mt-10 z-50 sm:px-8 md:px-10 lg:px-20 xl:px-32 mb-25 items-center justify-center">
      <div className="flex flex-row justify-between items-center">
        <Title 
          title="Exclusive Offers"
          subtitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
          align="left"
        />
        <button type="button" className="btn btn-primary my-20 group">
          View All Offers
          <TiArrowRightOutline className="ml-1 text-xl transform transition-all duration-200 group-hover:translate-x-2" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {exclusiveOffers.map((offer, index) => (
          <ExclusiveOfferCard key={index} {...offer} />
        ))}
      </div>
    </div>
  );
}
