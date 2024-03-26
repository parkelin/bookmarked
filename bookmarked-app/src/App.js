import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CharacterProvider } from './pages/Character/CharacterContext'; 
import Welcome from "./pages/Welcome/Welcome.js";
import LoadingScreen from "./pages/LoadingScreen/LoadingScreen.js";
import Character from "./pages/Character/Character.js";
import Glossary from "./pages/Glossary/Glossary.js";
import WritingDoc from "./pages/WritingDoc/WritingDoc.js";


export default function App() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(true);

  const toggleNavbar = () => {
      // console.log('Toggling sidebar');
      if (navbarIsOpen)
        setNavbarIsOpen(false)
      else
        setNavbarIsOpen(true)
  };

  return (
    <Router>
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
            <CharacterProvider>
              <Glossary 
                navbarIsOpen={navbarIsOpen} 
                toggleNavbar={toggleNavbar} />
            </CharacterProvider>
          </Route>
          
          <Route exact path="/writingdoc">
            <WritingDoc 
              navbarIsOpen={navbarIsOpen} 
              toggleNavbar={toggleNavbar} />
          </Route>

          <Route path="/glossary/:characterId">
            <CharacterProvider>
              <Character />
            </ CharacterProvider>
          </Route>
          
        </Switch>
      </div>
    </div>
    </Router>
  );
}
