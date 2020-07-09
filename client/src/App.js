import React, { useEffect, useState, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import SearchBar from "./components/layout/SearchBar";
import Temperature from "./components/temperature/Temperature";
import TempModal from "./components/temperature/TempModal";

import TemperatureContextProvider from "./context/temperature/TemperatureContext";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    //initializes Materialize JS
    M.AutoInit();
  });

  return (
    <TemperatureContextProvider>
      <Router>
        <Fragment>
          <NavBar />
          <SearchBar />
          <Temperature />
          <TempModal />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </TemperatureContextProvider>
  );
};

export default App;
