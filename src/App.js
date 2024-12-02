import logo from './logo.svg';
import React, { useState } from 'react';
import SearchSongs from './components/SearchSongs';
import './App.css';
import './components/css/SearchBar.css';

function App() {
  const [song, setSong] = useState('')
  const handleChange = (event) => {
    const { value } = event.target;
    setSong(value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();   
    const { value } = event.target;
    setSong(value);
    console.log(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>GEAGA</p>
      </header> 
      <div>
        <p>Gsgag</p>
        <SearchSongs searchValue={song} onSearchChange={handleChange}/>
      </div>
    </div>
  );
}

export default App;