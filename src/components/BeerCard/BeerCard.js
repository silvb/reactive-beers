import React from 'react'
import PropTypes from 'prop-types'
import BeerImage from './BeerImage/BeerImage'

const BeerCard = ({ beerInfo }) => {

  return (
    <div className="beer-card">
      <div className="beer-card__header">
        <h3>
          { beerInfo.name }
        </h3>
      </div>
      <BeerImage url={beerInfo.imageUrl} />
      <div className="beer-card__tagline">
        <span>{ beerInfo.tagline }</span>
      </div>
    </div>
  )
}

BeerCard.propTypes = {
  beerInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
}

export default BeerCard