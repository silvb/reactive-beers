import React from 'react'
import PropTypes from 'prop-types'

const BeerImage = ({ url }) => {
  return (
    <div className="beer-card__image-container">
      <img src={url} alt=""/>
    </div>
  )
}

BeerImage.propTypes = {
  url: PropTypes.string.isRequired,
}

export default BeerImage