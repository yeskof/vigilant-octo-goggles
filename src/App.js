import React, { Component } from "react";
import routes from "../src/routes";
import { Route,  Routes } from "react-router-dom";

import "./App.css";

//import style
import "./assets/css/pe-icon-7.css";
import "./assets/css/materialdesignicons.min.css";

import "./assets/scss/themes.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
          <Routes>
            {routes.map((route, idx) => (
              <Route path={route.path} element={route.component} key={idx} />
            ))}
          </Routes>
      </React.Fragment>
    );
  }
}

export default App;
