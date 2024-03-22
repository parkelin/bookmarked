import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome.js";
import LoadingScreen from "./pages/LoadingScreen/LoadingScreen.js";
import Character from "./pages/Character/Character.js";
import Glossary from "./pages/Glossary/Glossary.js";
import WritingDoc from "./pages/WritingDoc/WritingDoc.js";

export default function App() {
  return (
    <Router>
    <div className="global-container">
      <div className="content-container">
        <Switch>
          {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path="/" component={Welcome} />
          
          <Route exact path="/loading" component={LoadingScreen} />

          <Route exact path="/glossary" component={Glossary} />

          <Route exact path="/glossary/character" component={Character} />

          <Route exact path="/writing" component={WritingDoc} />

        </Switch>
      </div>
    </div>
    </Router>
  );
}
