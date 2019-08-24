import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import NavBar from './components/layout/navbar'
import Dashboard from './components/dashboard/Dashboard'
import DiscussionDetails from './components/discussions/DiscussionDetails'

const App = () => {
  return (
      <div className="ui container">
          <BrowserRouter>
              <div>
                <NavBar />
                <Switch>
                  <Route exact path='/' component={Dashboard} />
                  <Route exact path='/discussion/:id' component={DiscussionDetails} />
                </Switch> 
              </div>
          </BrowserRouter>
      </div>
  )
}

export default App;
