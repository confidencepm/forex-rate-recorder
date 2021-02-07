import React from "react";
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ExchangeRatesMonitor from "./components/ExchangeRatesMonitor";
import Home from "./components/Home";

function App() {
  return (
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Switch>
              <Route path="/latest-high-price" component={ExchangeRatesMonitor} />
          </Switch>
        </>
      </Router>
  );
}

export default App;
