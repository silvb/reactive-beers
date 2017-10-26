import * as types from '../constants/actionTypes'
import * as actions from '../actions/actions'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

describe('actions', () => {
  it('should create an action to update the search', () => {
    const text = 'beer'
    const expectedAction = {
      type: types.UPDATE_SEARCH_TEXT,
      text,
    }

    expect(actions.updateSearchText(text)).toEqual(expectedAction)
  })
})

const mockStore = configMockStore([thunk])
const mockAxios = new MockAdapter(axios)

describe('async actions', () => {

  afterEach(() => {
    mockAxios.reset()
    mockAxios.restore()
  })

  it('should create an action to fetch some beers', () => {
    const mockBeers = [
      {
        id: 0,
        name: 'First Beer',
        tagline: 'Just beer.',
        image_url: 'path/to/image.jpg',
      },
      {
        id: 1,
        name: 'Second Beer',
        tagline: 'Moar beer.',
        image_url: 'path/to/another-image.jpg',
      },
    ]
    const mockUrl = '/beers'

    mockAxios.onGet(mockUrl).reply(200, mockBeers)

    const expectedActions = [
      {
        type: types.ORDER_BEERS,
        apiUrl: mockUrl,
      },
      {
        type: types.RECEIVE_BEERS,
        beers: mockBeers.map(({ name, tagline, image_url, id }) => ({ name, tagline, imageUrl: image_url, id })),
      },
    ]

    const store = mockStore({ beers: [] })

    return store.dispatch(actions.fetchBeers(mockUrl))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})