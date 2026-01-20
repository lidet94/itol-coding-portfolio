import React from 'react'

export const SearchBar = ({onSearch}) => {

  return (
    <div className='search-bar'>
      <input 
      type='text'
      onChange={(e)=> onSearch(e.target.value)}
      placeholder='Type the show here'
      >
      </input>
    </div>
  )
}

