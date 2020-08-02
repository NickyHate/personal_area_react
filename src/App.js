import React from "react";
import Auth from "./components/auth";
import Contacts from "./components/contacts";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Auth}></Route>
        <Route path="/contacts" exact component={Contacts}></Route>        
      </div>
    </Router>
  );
}

export default App;
