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
  // console.log(fetchedData);
  // console.log(elementName);
  const handleSubmit = (event) => {
    event.preventDefault();
    const e = document.getElementById("elements");
    const selectedValue = e.value;
    searchByName(selectedValue).then(({ data }) => {
      setSelectedElement(data);
    });
    setSearchResultsState(true);

    // console.log(selectedElement);
  };

  const copyFunction = (e) => {
    e.preventDefault();
    /* Get the text field */
    var range = document.createRange();
    range.selectNode(document.getElementById("copyDiv"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect
  };

  return (
    <div>
      <div>
        <h5>
          <form onSubmit={handleSubmit}>
            {" "}
            <select id="elements">
              <optgroup label="HTML">
                {" "}
                <option value="divWithClass">div with classname</option>
                <option value="divWithId">div with id</option>
              </optgroup>
              <optgroup label="JAVASCRIPT">
                <option value="array">array</option>
                <option value="object">object</option>
                <option value="arrowFunction">arrow function</option>

                <option value="ifElse">if else</option>

                <option value="forLoop">for loop</option>
                <option value="forEach">forEach</option>

                <option value="mathRandomFloor">math.random/floor</option>
                <option value="setTimeout">set timeout</option>
              </optgroup>
            </select>{" "}
            <input
              id="myInput"
              placeholder="Enter your input"
              value={elementName.name}
              onChange={(e) =>
                setElementName([{ ...elementName, name: e.target.value }])
              }
            ></input>
            <button type="submit">Output</button>
          </form>
        </h5>
      </div>
      <div id="copyDiv">
        {searchResultsState
          ? React.Children.toArray(
              selectedElement.map((item) => (
                <h5>
                  {item.start} {elementName.map((name) => name.name)}
                  {item.middle}
                  {item.end}
                </h5>
              ))
            )
          : ""}
      </div>
      <button onClick={copyFunction}>Copy To Clipboard</button>
    </div>
  );
}

export default Home;
