export const handleChange = (setVal) => (event) => {
  const { value } = event.target;
  setVal(value);
};

const getJson = async () => {
  const url = "/songsExample.json";
  try {
    const response = await fetch(`${url}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const findSongs = (result, searchValue) => {
  if (!result) {
    console.log("No results to process.")
    return;
  }
  const includesSearch = (item, category) => item[category].toLowerCase().includes(searchValue.toLowerCase());
  if (searchValue) {
    const searchResults = result.filter(value => 
      includesSearch(value, 'name') 
      || includesSearch(value, 'artist') 
      || includesSearch(value, 'album')
    )
    return searchResults;
  } else {
    return [];
  }
};

export const handleSubmit = (val, setVal, setResult) => async (event) => {
  event.preventDefault();
  console.log("Search value: " + val);
  try {
    const results = await getJson();
    const resultArray = findSongs(results, val);
    setResult(resultArray);
    // console.log(resultArray);    
    setVal("");
  } 
  catch (error) {
    console.log("Error in handleSubmit: " + error);
  }
};

export const addSong = (song, setList) => {
  setList(prev => [...prev, song]);
};

export const removeSong = (array, id, set) => {
  set(array.filter(song => song.id !== id));
};

const hash = window.location.hash;
const params = new URLSearchParams(hash.substring(1));
console.log(params.get('expires_in'));
const accessToken = params.get('expires_in');
const state_test = params.get('state');
const savedSt2qwrqwate = localStorage.getItem('spotify_auth_state');
const asfasf = localStorage.getItem('spotify_token_expiration');
const dfhdfh = localStorage.getItem('spotify_auth_state');
console.log(`
  ${savedSt2qwrqwate}
  ${asfasf}
  ${state_test}
  `)

