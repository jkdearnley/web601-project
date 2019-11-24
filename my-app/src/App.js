import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import NavBar from './components/layout/navbar'
import Dashboard from './components/dashboard/Dashboard'
import DiscussionDetails from './components/discussions/DiscussionDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateDiscussion from './components/discussions/CreateDiscussion'
import About from './components/About';
import ContactUs from './components/contact/ContactUs'
import './index.css'

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
                  <Route exact path='/create' component={CreateDiscussion} />
                  <Route exact path='/details' component={DiscussionDetails} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/contact' component={ContactUs} />
                </Switch> 
              </div>
          </BrowserRouter>
      </div>
  )
}

export default App;

