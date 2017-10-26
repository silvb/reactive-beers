import React from 'react'
import SearchInput from './SearchInput'
import ClearButton from './ClearButton'

const SearchArea = () => {
  return (
    <div className="search-area">
      <SearchInput />
      <ClearButton />
    </div>
  )
}

export default SearchArea