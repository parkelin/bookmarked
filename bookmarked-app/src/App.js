import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CharacterProvider } from "./context/CharacterContext.js";
import { EditorProvider } from "./context/EditorContext.js";
import { AuthProvider } from "./context/AuthContext.js";
import ProtectedRoute from "./components/ProtectedRoute.js";
import Welcome from "./pages/Welcome/Welcome.js";
import Character from "./pages/Character/Character.js";
import Glossary from "./pages/Glossary/Glossary.js";
import WritingDoc from "./pages/WritingDoc/WritingDoc.js";
import NewUserTutorial from "./pages/Tutorial/NewUserTutorial.js";
import RightClickTutorial from "./components/RightClickTutorial.js"

export default function App() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(true);

  const toggleNavbar = () => {
    // console.log('Toggling sidebar');
    if (navbarIsOpen) setNavbarIsOpen(false);
    else setNavbarIsOpen(true);
  };

  return (
    <AuthProvider>
      <EditorProvider>
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
                    render={(props) => (
                      <Glossary
                        navbarIsOpen={navbarIsOpen}
                        toggleNavbar={toggleNavbar}
                      />
                    )}
                  />
                  <ProtectedRoute
                    exact
                    path="/writingdoc"
                    render={(props) => (
                      <WritingDoc
                        navbarIsOpen={navbarIsOpen}
                        toggleNavbar={toggleNavbar}
                      />
                    )}
                  />

                  <ProtectedRoute
                    path="/glossary/:characterId"
                    render={(props) => (
                      <Character
                        {...props} 
                        navBarisOpen={navbarIsOpen}
                        toggleNavBar={toggleNavbar}
                      />
                    )}
                  />
                  <ProtectedRoute
                    exact
                    path="/tutorial/welcome"
                    render={(props) => <NewUserTutorial {...props} welcomeScreen={true}/>}
                  />
                  <ProtectedRoute
                    exact
                    path="/tutorial/"
                    render={(props) => <NewUserTutorial {...props} welcomeScreen={false}/>}
                  />
                  <ProtectedRoute
                    exact
                    path="/tutorial/doc"
                    render={(props) => <RightClickTutorial {...props} />}
                  />
                </Switch>
              </div>
            </div>
          </Router>
        </CharacterProvider>
      </EditorProvider>
    </AuthProvider>
  );
}
