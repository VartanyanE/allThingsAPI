import React, { useEffect, useState } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
};

export default App;
