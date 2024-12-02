import logo from './logo.svg';
import SearchSongs from './components/SearchSongs';
import { useState } from 'react';
import './App.css';
import './components/css/SearchBar.css';

function App() {
  const [song, setSong] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>GEAGA</p>
      </header> 
      <div>
        <p>Gsgag</p>
        <SearchSongs />
      </div>
    </div>
  );
}

export default App;