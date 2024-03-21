import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome.js";
import LoadingScreen from "./pages/LoadingScreen/LoadingScreen.js";
import Character from "./pages/Character/Character.js";
import Glossary from "./pages/Glossary/Glossary.js";
import WritingDoc from "./pages/WritingDoc/WritingDoc.js";

export default function App() {
  return (
    <div className="global-container">
      <div className="content-container">
        <Switch>
          {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path="/">
            <Welcome />
          </Route>

          <Route exact path="/loading">
            <LoadingScreen />
          </Route>

          <Route exact path="/glossary">
            <Glossary />
          </Route>

          <Route exact path="/glossary/character">
            <Character />
          </Route>

          <Route exact path="/writingdoc">
            <WritingDoc />
          </Route>

        </Switch>
      </div>
    </div>
  );
}