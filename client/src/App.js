import React, {useEffect, useState} from 'react';
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
  const [isAuth, setIsAuth] = useState(false);

  const authenticate = async () => {
    const res = await fetch('http://localhost:5000/user/isauth')
    if(res.ok){
      setIsAuth(true)
    }
  }

  const logout = () => {
    fetch('http://localhost:5000/user/logout')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then((values) => { 
        console.log(values)
      });
  }
  useEffect(() => {
    authenticate()
  });

  if(isAuth){
    return <h1>Auth</h1>
  }else{
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
}

export default App;
