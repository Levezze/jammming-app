import React, { useState } from 'react';


function SearchBar({ value, onChange }) {

  return (
    <form className='SearchBar-container'>
      <input 
      className="SearchBar"
      type='text'
      id='searchBar' 
      name='searchBar' 
      value={value} 
      onChange={onChange} 
      placeholder='Search for songs...' 
      />
    </form>
  );
};

export default SearchBar;