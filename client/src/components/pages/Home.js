import React, { useState, useEffect } from "react";
import { getData } from "../../utils/Api";

function Home() {
  const [fetchedData, setFetchedData] = useState([{}]);
  useEffect(() => {
    getData().then(({ data }) => {
      setFetchedData(data);
      console.log(fetchedData);
    });
  }, []);
  return <div>Hey</div>;
}

export default Home;
