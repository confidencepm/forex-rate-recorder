import React from "react";
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import High from "./components/High";
import Home from "./components/Home";

function App() {
  return (
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Switch>
              <Route path="/latest-high-price" component={High} />
          </Switch>
        </>
      </Router>
  );
}

export default App;
