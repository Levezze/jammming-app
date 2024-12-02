import React, { useState } from 'react';


function SearchBar() {
  const [song, setSong] = useState('')

  const handleChange = ({target: {value}}) => {
    setSong(value);
    console.log(value);
  }

  return (
    <form className='SearchBar-container'>
      <input 
      className="SearchBar"
      type='text' 
      id='searchBar' 
      name='searchBar' 
      value={song} 
      onChange={handleChange} 
      placeholder='Search for songs...' 
      />
    </form>
  );
};

export default SearchBar;