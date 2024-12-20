import React from 'react';
import './SearchBar.css'

function SearchBar({ value, onChange }) {
  return (
    <>
      <input 
        className="SearchBar"
        type='text'
        id='searchBar' 
        name='searchBar' 
        value={value} 
        onChange={onChange} 
        placeholder='Search for songs...' />
    </>
  );
};

export default SearchBar;