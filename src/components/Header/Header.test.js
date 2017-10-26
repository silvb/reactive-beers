import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'

describe('Header', () => {
  it('renders without crashing', () => {
    const component = renderer.create(
      <Header />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})