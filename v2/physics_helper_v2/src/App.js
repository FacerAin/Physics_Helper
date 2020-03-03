import React from "react";
import { Route } from "react-router-dom";
import Exp01 from "./components/exp/exp01/exp01";
import "./App.css";
import Nav from "./components/nav/nav";

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <hr />
      <Route path="/exp01" component={Exp01} exact />
    </div>
  );
};

export default App;
