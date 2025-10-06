import React from 'react'
import PropTypes from 'prop-types'
import { assets } from '../assets/assets'

export default function StarRating({ rating }) {
  return (
    <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <img
            key={i}
            src={i < rating ? assets.starIconFilled : assets.starIconOutlined}
            alt="star"
            className="inline-block"
          />
        ))}
      </div>
  )
}

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
}