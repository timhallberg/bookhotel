import { useState } from "react";
var data = require("../data.json");

export default function Autocomplete() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
    <div className="App">
  

      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.country.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            //Limits the amount of autocomplete results 0-10
            .slice(0, 1)

            //Maps the data inside the dropdown onClick and onSearch
            .map((item) => (
              <div
                onClick={() => onSearch(item.country)}
                className="dropdown-row"
                key={item.country}
              >
                {item.country}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
