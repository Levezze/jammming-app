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

  let selectedResults = []
  const searchResults = result.map((value) => {
    if (value['name'].toLowerCase().includes(searchValue.toLowerCase())) {
      console.log(value);
    };
  });
};

export const handleSubmit = (val, setVal) => async (event) => {
  event.preventDefault();
  console.log("Search value: " + val);
  try {
    const results = await getJson();
    console.log(results);

    findSongs(results, val);
    setVal("");
  } catch (error) {
    console.log("Error in handleSubmit: " + error);
  }

};