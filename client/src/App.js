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
import {Button} from 'reactstrap'

function App(props) {
  const [isAuth, setIsAuth] = useState(false);

  const authenticate = async () => {
    const res = await fetch('/user/isauth')
    if(res.ok){
      setIsAuth(true)
    }
  }

  const logout = async () => {
    await fetch('/user/logout')
      .then(response => console.log(response))
  }

  const login = (email, pass) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: pass
      })
    };
    fetch('/user/login', requestOptions)
        .then(response => console.log(response))
  } 
  useEffect(() => {
    authenticate()
  });

  if(isAuth){
    return <button onClick={logout}>Logout</button>
  }else{
    return (
      <div className="App">
        <Button onClick={() => login("soma.mizo@gmail.com", "password")}>Login</Button>
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
