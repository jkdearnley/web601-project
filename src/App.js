import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import NavBar from './components/layout/navbar'
import Dashboard from './components/dashboard/Dashboard'

const App = () => {
  return (
      <div className="ui container">
          <BrowserRouter>
              <div>
                <NavBar />
                <Switch>
                  <Route path='/' component={Dashboard} />
                </Switch> 
              </div>
          </BrowserRouter>
      </div>
  )
}

export default App;
