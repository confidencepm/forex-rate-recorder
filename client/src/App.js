import React from "react";
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import High from "./components/High";
import Low from "./components/Low";
import Average from "./components/Average";
import Home from "./components/Home";

function App() {
  return (
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Switch>
              <Route path="/latest-high-price" component={High} />
              <Route path="/latest-low-price" component={Low} />
              <Route path="/average-closing-price" component={Average} />
          </Switch>
        </>
      </Router>
  );
}

export default App;
