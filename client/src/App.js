import React, {useEffect} from 'react';
import './App.css';
import MainNav from './Components/MainNav'
import About from './Components/About'
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


function App() {

  useEffect(() => {
    
  });

  return (
    <div className="App">
      <Router>
      <MainNav />
        <Switch>
          <Route path="/About"><About /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
