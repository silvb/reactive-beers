import React from 'react'
import PropTypes from 'prop-types'
import BeerCard from '../BeerCard/BeerCard'

const BeerCards = ({ beers }) => (
  <div className="beercards">
    { renderBeers(beers) }
  </div>
)

BeerCards.propTypes = {
  beers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

const renderBeers = beers =>
  beers.map(beer =>
    (<BeerCard beerInfo={beer} key={beer.id} />))

export default BeerCards