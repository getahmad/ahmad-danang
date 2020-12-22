import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blog";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/project">
          <Projects/>
        </Route>
        <Route exact path="/blog">
          <Blogs/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}
