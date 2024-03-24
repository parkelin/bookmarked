import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome.js";
import LoadingScreen from "./pages/LoadingScreen/LoadingScreen.js";
import Character from "./pages/Character/Character.js";
import Glossary from "./pages/Glossary/Glossary.js";
import WritingDoc from "./pages/WritingDoc/WritingDoc.js";

// temporary data, will be replaced with database
const characterList = [
  {
      id: 1,
      characterName: 'Harry Potter',
      imageName: 'harryPotterIcon.png',
      caption: 'Main Protagonist, 11',
      location: 'Godric\'s Hollow',
      description: 'The only child and son of James and Lily Potter (née Evans), Harry\'s birth was overshadowed by a prophecy, naming either himself or Neville Longbottom as the one with the power to vanquish Lord Voldemort, one of the most powerful and feared Dark wizards in the world. After half of the prophecy was reported to Voldemort, courtesy of Severus Snape, Harry was chosen as the target due to his many similarities with the Dark Lord.',
    },
    {
      id: 2,
      characterName: 'Hermione Granger',
      imageName: 'HermioneGrangerIcon.png',
      caption: 'Side Protagonist, 12',
      location: 'Godric\'s Hollow',
      description: '',
    },
    {
      id: 3,
      characterName: 'Ron Weasley',
      imageName: 'harryPotterIcon.png',
      caption: 'Side Protagonist, 11',
      location: 'Godric\'s Hollow',
      description: '',
    }
]

export default function App() {
  return (
    <Router>
    <div className="global-container">
      <div className="content-container">
        <Switch>
          {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path="/welcome">
            <Welcome />
          </Route>
          
          <Route exact path="/loading">
            <LoadingScreen />
          </Route>

          <Route exact path="/glossary">
            <Glossary characterList={characterList}/>
          </Route>

          <Route exact path="/glossary/character">
            <Character />
          </Route>

          <Route exact path="/writingdoc">
            <WritingDoc />
          </Route>

          <Route path="/glossary/:characterId">
            <Character characterList={characterList}/>
          </Route>
          
        </Switch>
      </div>
    </div>
    </Router>
  );
}
