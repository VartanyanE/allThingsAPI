import React, { useState, useEffect, useRef } from "react";
import { getData, searchByName } from "../../utils/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./home.css";
import logo from "../../codelogo.png";
toast.configure();

function Home() {
  const [fetchedData, setFetchedData] = useState([{}]);

  const inputEl = useRef({});
  const inputParam = useRef({});

  const [selectedElement, setSelectedElement] = useState([{}]);
  const [elementName, setElementName] = useState([{}]);
  const [parameters, setParameters] = useState([{}]);
  const [paramState, setParamState] = useState(false);
  const [inputState, setInputState] = useState(false);
  const [buttonState, setButtonState] = useState(false);
  const [customPlaceholder, setCustomPlaceholder] = useState([
    {
      name: "name",
    },
  ]);
  const [customInput, setCustomInput] = useState([
    {
      name: "parameters",
    },
  ]);
  const [searchResultsState, setSearchResultsState] = useState(false);
  let colored = "green";
  console.log(`%c ${colored}`, "color: green");
  useEffect(() => {
    getData().then(({ data }) => {
      setFetchedData(data);
      console.log(`%c ${"array"}`, "color: green");
    });
  }, []);
  // console.log(fetchedData);
  // console.log(elementName);
  const handleSubmit = (event) => {
    event.preventDefault();
    let e = document.getElementById("elements");
    let selectedValue = e.value;
    searchByName(selectedValue).then(({ data }) => {
      setSelectedElement(data);
    });
    setTimeout(function () {
      setSearchResultsState(true);
    }, 400);
    if (selectedValue === "useEffect") {
      showOnSelect(selectedValue);
    }

    clearForm();
    clearParamInput();
  };

  const clearForm = () => {
    inputEl.current.value = "";
  };

  const clearParamInput = () => {
    inputParam.current.value = "";
  };

  const showOnSelect = (selectedValue) => {
    console.log(selectedValue);
    searchByName(selectedValue).then(({ data }) => {
      setSelectedElement(data);
    });
    setSearchResultsState(true);
  };

  const copyFunction = (e) => {
    e.preventDefault();
    /* Get the text field */
    var range = document.createRange();
    range.selectNode(document.getElementById("copyDiv"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    toast("Copied The Code!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="grid-container">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="main-inputs">
        <h5 className="main">
          <form onSubmit={handleSubmit}>
            {" "}
            <select
              onChange={() => {
                const e = document.getElementById("elements");
                const selectedValue = e.value;
                if (selectedValue == "useEffect") {
                  searchByName(selectedValue).then(({ data }) => {
                    setSelectedElement(data);
                  });
                  setSearchResultsState(true);
                  setParamState(false);
                } else if (selectedValue === "setTimeout") {
                  setCustomPlaceholder([
                    {
                      ...customPlaceholder,
                      name: "milliseconds",
                    },
                  ]);
                  setButtonState(true);
                  setInputState(true);
                  setSearchResultsState(false);
                  setParamState(false);
                  setParameters([{ ...parameters, name: "" }]);
                } else if (selectedValue === "divWithClass") {
                  setCustomPlaceholder([
                    {
                      ...customPlaceholder,
                      name: "class name",
                    },
                  ]);
                  setSearchResultsState(false);
                  setButtonState(true);

                  setParamState(false);
                  setParameters([{ ...parameters, name: "" }]);
                } else if (selectedValue === "forLoop") {
                  setCustomPlaceholder([
                    {
                      ...customPlaceholder,
                      name: "array name",
                    },
                  ]);
                  setInputState(true);
                  setButtonState(true);

                  setParamState(false);
                } else if (selectedValue === "divWithId") {
                  setCustomPlaceholder([
                    {
                      ...customPlaceholder,
                      name: "id name",
                    },
                  ]);
                  setSearchResultsState(false);
                  setButtonState(true);

                  setParamState(false);
                  setParameters([{ ...parameters, name: "" }]);
                } else if (selectedValue === "linkStylesheet") {
                  setCustomPlaceholder([
                    {
                      ...customPlaceholder,
                      name: "css file name",
                    },
                  ]);
                  setSearchResultsState(false);
                  setButtonState(true);

                  setParamState(false);
                  setParameters([{ ...parameters, name: "" }]);
                } else if (selectedValue === "arrowFunction") {
                  setCustomPlaceholder([
                    {
                      ...customPlaceholder,
                      name: "function name",
                    },
                  ]);
                  setSearchResultsState(false);
                  setInputState(true);
                  setButtonState(true);

                  setParamState(true);
                } else if (selectedValue === "consoleLog") {
                  setCustomInput([
                    {
                      ...customInput,
                      name: "enter css",
                    },
                  ]);
                  setCustomPlaceholder([
                    {
                      ...customPlaceholder,
                      name: "console log",
                    },
                  ]);
                  setInputState(true);

                  setSearchResultsState(false);
                  setButtonState(true);

                  setParamState(true);
                } else if (selectedValue === "arrowFunction ASYNC AWAIT") {
                  setCustomPlaceholder([
                    {
                      ...customPlaceholder,
                      name: "function name",
                    },
                  ]);
                  setSearchResultsState(false);
                  setInputState(true);
                  setButtonState(true);

                  setParamState(true);
                } else if (selectedValue === "forEach") {
                  setCustomPlaceholder([
                    {
                      ...customPlaceholder,
                      name: "array name",
                    },
                  ]);
                  setSearchResultsState(false);
                  setInputState(true);
                  setButtonState(true);

                  setParamState(false);
                  setParameters([{ ...parameters, name: "" }]);
                } else if (selectedValue === "mathRandomFloor") {
                  setCustomPlaceholder([
                    {
                      ...customPlaceholder,
                      name: "max integer",
                    },
                  ]);
                  setSearchResultsState(false);
                  setInputState(true);
                  setButtonState(true);

                  setParamState(false);
                  setParameters([{ ...parameters, name: "" }]);
                } else {
                  setCustomPlaceholder([
                    {
                      ...customPlaceholder,
                      name: "name",
                    },
                  ]);
                  setSearchResultsState(false);
                  setInputState(true);
                  setButtonState(true);

                  setParamState(false);
                  setParameters([{ ...parameters, name: "" }]);
                }
                clearForm();
                // clearParamInput();
              }}
              id="elements"
            >
              <option value="">Choose Your Poison</option>

              <optgroup label="JAVASCRIPT">
                <option value="array">array</option>
                <option value="object">object</option>
                <option value="arrowFunction">arrow function</option>
                <option value="arrowFunction ASYNC AWAIT">
                  arrow function async/await
                </option>

                <option value="forLoop">for loop</option>
                <option value="forEach">forEach</option>

                <option value="mathRandomFloor">math.random/floor</option>
                <option value="setTimeout">set timeout</option>
                <option value="consoleLog">styled console log</option>
              </optgroup>
              <optgroup label="REACT">
                <option value="useEffect">useEffect</option>
              </optgroup>
            </select>{" "}
            <br />
            {inputState ? (
              <input
                id="myInput"
                ref={inputEl}
                placeholder={customPlaceholder[0].name}
                value={elementName.name}
                onChange={(e) =>
                  setElementName([{ ...elementName, name: e.target.value }])
                }
              ></input>
            ) : (
              ""
            )}
            <br />
            {paramState ? (
              <input
                id="myInput"
                ref={inputParam}
                placeholder={customInput[0].name}
                value={parameters.name}
                onChange={(e) =>
                  setParameters([{ ...parameters, name: e.target.value }])
                }
              ></input>
            ) : (
              ""
            )}
            {buttonState ? (
              <button className="button_slide slide_right" type="submit">
                Output
              </button>
            ) : (
              ""
            )}
          </form>
        </h5>
      </div>
      <div className="about">
        <h3>
          Hello my fellow Javascripters. <br />
          CODESNIPSNIP is a javascript snippet <br />
          generator that is built to increase <br />
          productivity. Spend less time <br />
          writing redundant code and more <br />
          time building logic and design.
          <br />
        </h3>
      </div>
      <div id="copyDiv" className="copy" onClick={copyFunction}>
        {searchResultsState
          ? React.Children.toArray(
              selectedElement.map((item) => (
                <h5 className="main">
                  {item.start} {elementName.map((name) => name.name)}
                  {item.middle}
                  {parameters.map((name) => name.name)}
                  {item.end}
                </h5>
              ))
            )
          : ""}
      </div>
    </div>
  );
}

export default Home;
