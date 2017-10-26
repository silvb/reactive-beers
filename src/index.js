import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { fetchBeers } from './actions/actions'
import rootReducer from './reducers/rootReducer'
import './index.sass'
import App from './components/App/App'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)

store.dispatch(fetchBeers('https://api.punkapi.com/v2/beers?page=1&per_page=40'))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
