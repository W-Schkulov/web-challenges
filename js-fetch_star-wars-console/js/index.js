console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.results[0].name);
    console.log(data.results[2].name.eye_color);
  } catch (error) {
    console.error("Error", error);
  }
}
fetchData();
