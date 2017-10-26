import BeerCards from '../BeerCards/BeerCards'
import { connect } from 'react-redux'

const filterBeers = (searchText, beers) =>
  beers.filter(beer =>
    beer.name.toLowerCase().search(searchText.toLowerCase()) !== -1
  )

const mapStateToProps = state => ({
  beers: filterBeers(state.searchText, state.beers),
})

const Dashboard = connect(mapStateToProps)(BeerCards)

export default Dashboard