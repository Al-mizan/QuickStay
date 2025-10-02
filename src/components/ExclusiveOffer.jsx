import React from "react";

export default function ExclusiveOffer() {
  return (
    <>
    <div className="container mx-auto max-w-[1700px] z-50 sm:px-8 md:px-10 lg:px-20 xl:px-32 items-center justify-center text-center pt-15 pb-5">
      <div className="text-4xl font-['Playfair_Display'] mb-4">Exclusive Offers</div>
      <div className="text-md text-gray-500">
        Take advantage of our limited-time offers and special packages to
        enhance your stay and create unforgettable memories.
      </div>
      <div>
        <button type="button" className="btn btn-primary my-20">
          View All Offers -
        </button>
      </div>
    </div>
    </>
  );
}
