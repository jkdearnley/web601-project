import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import NavBar from './components/layout/navbar'

const App = () => {
  return (
      <div className="ui container">
          <BrowserRouter>
              <div>
              <NavBar />
                  
              </div>
          </BrowserRouter>
      </div>
  )
}



export default App;
