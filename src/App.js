import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <switch>
          <Route path="/" exact component={Home} />
        </switch>
      </Router>
    </div>
  );
}

export default App;
