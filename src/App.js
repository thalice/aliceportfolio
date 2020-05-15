import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Accueil from "./components/Accueil";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/accueil" component={Accueil}></Route>
          <Route path="/aboutMe" component={AboutMe}></Route>
          <Route path="/realisations" component={Portfolio}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
