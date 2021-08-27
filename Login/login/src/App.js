
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Preferences from './Components/Preferences';
import useToken from './Components/useToken';


function App() {
  const {token, setToken} = useToken();
  if(!token){
    return <Login setToken={setToken} />
  }
  return (
    <div className="Wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
