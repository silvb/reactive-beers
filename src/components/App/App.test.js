import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../../reducers/rootReducer'
import renderer from 'react-test-renderer'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    const store = createStore(rootReducer)
    const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})