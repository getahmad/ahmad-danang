import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blog";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import PortfolioFull from "./Pages/Portfolio/PortfolioFull";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/portfolio/:title">
          <PortfolioFull />
        </Route>
        <Route exact path="/blog">
          <Blogs />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
