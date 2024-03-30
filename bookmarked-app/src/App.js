import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CharacterProvider } from "./context/CharacterContext.js";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Welcome from "./pages/Welcome/Welcome.js";
import Character from "./pages/Character/Character.js";
import Glossary from "./pages/Glossary/Glossary.js";
import WritingDoc from "./pages/WritingDoc/WritingDoc.js";

export default function App() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(true);

  const toggleNavbar = () => {
    // console.log('Toggling sidebar');
    if (navbarIsOpen) setNavbarIsOpen(false);
    else setNavbarIsOpen(true);
  };

  return (
    <AuthProvider>
      <CharacterProvider>
        <Router basename="/bookmarked">
          <div className="global-container">
            <div className="content-container">
              <Switch>
                {/* The Switch decides which component to show based on the current URL.*/}
                <Route exact path="/" component={Welcome}>
                  <Welcome />
                </Route>

                <ProtectedRoute
                  exact
                  path="/glossary"
                  component={() => (
                    <Glossary
                      navbarIsOpen={navbarIsOpen}
                      toggleNavbar={toggleNavbar}
                    />
                  )}
                />

{/* protectedRoute affecting shortcuts */}
                <Route exact path="/writingdoc">
                  <WritingDoc
                    navbarIsOpen={navbarIsOpen}
                    toggleNavbar={toggleNavbar}
                  />
                </Route>

                <ProtectedRoute
                  path="/glossary/:characterId"
                  component={() => (
                    <Character
                      navBarisOpen={navbarIsOpen}
                      toggleNavBar={toggleNavbar}
                    />
                  )}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </CharacterProvider>
    </AuthProvider>
  );
}
