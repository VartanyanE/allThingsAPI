import React, { useState, useEffect } from "react";
import { getData, searchByName } from "../../utils/Api";

function Home() {
  const [fetchedData, setFetchedData] = useState([{}]);
  const [selectedElement, setSelectedElement] = useState([{}]);
  const [elementName, setElementName] = useState([{}]);
  const [searchResultsState, setSearchResultsState] = useState(false);
  useEffect(() => {
    getData().then(({ data }) => {
      setFetchedData(data);
    });
  }, []);
  console.log(fetchedData);
  console.log(elementName);
  const handleSubmit = (event) => {
    event.preventDefault();
    const e = document.getElementById("elements");
    const selectedValue = e.value;
    searchByName(selectedValue).then(({ data }) => {
      setSelectedElement(data);
    });
    setSearchResultsState(true);

    console.log(selectedElement);
  };
  return (
    <div>
      <div>
        <h5>
          <form onSubmit={handleSubmit}>
            {" "}
            Make me an
            <select id="elements">
              <option value="array">Array</option>
              <option value="object">Object</option>
            </select>{" "}
            with the name of
            <input
              value={elementName.name}
              onChange={(e) =>
                setElementName([{ ...elementName, name: e.target.value }])
              }
            ></input>
            <button type="submit">Do It</button>
          </form>
        </h5>
      </div>
      {searchResultsState
        ? selectedElement.map((item) => (
            <h5>
              const {elementName.map((name) => name.name)} = {item.syntaxStart}
              {item.syntaxEnd};
            </h5>
          ))
        : ""}
    </div>
  );
}

export default Home;
