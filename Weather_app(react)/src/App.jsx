import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Search from "./components/Search";

function App() {
  const [weather, setCurrentWeather] = useState(false);
  const [location, setLocation] = useState(false);
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [searchedLocation, setSearchedLocation] = useState([]);

  useEffect(() => {
    let url = `https://api.weatherapi.com/v1/current.json?key=7053581a85ad4febb92173004232510&q=`;
    url = `${url}${
      searchedLocation.length > 0 ? searchedLocation.join(",") : "Paris"
    }`;

    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setCurrentWeather(data.current);
        setLocation(data.location);
      });
  }, [searchedLocation]);

  return (
    <div className="App">
      <Search
        active={searchBarActive}
        selectedLocation={(lat, lon) => {
          setSearchedLocation([lat, lon]);
        }}
      />
      <div className="App-inner">
        {weather ? (
          <Main
            location={location}
            temperature={weather.temp_c}
            condition={weather.condition}
            onSearchButtonClick={() => {
              setSearchBarActive(true);
            }}
          />
        ) : (
          "Loading...."
        )}
      </div>
    </div>
  );
}

export default App;
