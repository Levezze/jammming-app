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
    // console.log(jsonResponse[5]['name'].toLowerCase().includes('J'.toLowerCase()));
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
  const searchResults = result.filter(value => 
    includesSearch(value, 'name') 
    || includesSearch(value, 'artist') 
    || includesSearch(value, 'album')
  );
  return searchResults;
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