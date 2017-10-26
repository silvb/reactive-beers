import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateSearchText } from '../../actions/actions'

let ClearButton = ({ dispatch }) => {
  const handleClick = event => {
    event.preventDefault()
    dispatch(updateSearchText(''))
  }

  return (
    <div className="search-area__button-clear"
      onClick={handleClick}>
      Clear
    </div>
  )
}

ClearButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

ClearButton = connect()(ClearButton)

export default ClearButton