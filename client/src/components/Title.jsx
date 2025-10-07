import React from "react";
import PropTypes from "prop-types";

export default function Title({ title, subtitle, align = "center" }) {
  return (
    <div className={`max-w-3xl ${align === "center" && "mx-auto"} text-${align}`}>
      <h1 className="text-4xl md:text-[40px] font-['Playfair_Display'] mb-4">
        {title}
      </h1>
      <p className="text-sm md:text-base text-gray-500 mt-2 max-w-174">
        {subtitle}
      </p>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["left", "center", "right"]),
};