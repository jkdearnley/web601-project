import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import NavBar from './components/layout/navbar'
import Dashboard from './components/dashboard/Dashboard'
import DiscussionDetails from './components/discussions/DiscussionDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'


const App = () => {
  return (
      <div className="ui container">
          <BrowserRouter>
              <div>
                <NavBar />
                <Switch>
                  <Route exact path='/' component={Dashboard} />
                  <Route exact path='/discussion/:id' component={DiscussionDetails} />
                  <Route exact path='/signin' component={SignIn} />
                  <Route exact path='/signup' component={SignUp} />
                </Switch> 
              </div>
          </BrowserRouter>
      </div>
  )
}

export default App;
