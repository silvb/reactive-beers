import axios from 'axios'
import {
  UPDATE_SEARCH_TEXT,
  ORDER_BEERS,
  RECEIVE_BEERS,
} from '../constants/actionTypes'

export const updateSearchText = text => ({ type: UPDATE_SEARCH_TEXT, text })

const orderBeers = apiUrl => ({ type: ORDER_BEERS, apiUrl })

const receiveBeers = beers => ({ type: RECEIVE_BEERS, beers })

export const fetchBeers = apiUrl =>
  dispatch => {
    dispatch(orderBeers(apiUrl))
    return axios.get(apiUrl)
      .then(
        response => response.data,
        error => console.error(error)
      )
      .then(beers =>
        beers.map(
          ({ id, name, tagline, image_url }) => ({
            id,
            name,
            tagline,
            imageUrl: image_url,
          })
        )
      )
      .then(beers => dispatch(receiveBeers(beers)))
  }