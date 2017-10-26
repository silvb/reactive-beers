import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateSearchText } from '../../actions/actions'

let SearchInput = ({ searchText, dispatch }) => {
  const handleChange = event => {
    dispatch(updateSearchText(event.target.value))
  }

  return (
    <input type="text" className="search-area__input"
      onChange={handleChange}
      value={searchText} />
  )
}

SearchInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  searchText: state.searchText,
})

SearchInput = connect(mapStateToProps)(SearchInput)

export default SearchInput