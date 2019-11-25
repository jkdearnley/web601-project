// import React, {Component} from 'react'
import { NavLink, Link } from 'react-router-dom'
// import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
// import './index.css'

// const Navbar = () => {
//     return (
//         <nav className="nav-wrapper grey darken-3">
//             <div className="container">
//                 <Link to='/' className="brand-logo">GamersV!be</Link>
//                 <SignedInLinks />
//                 <SignedOutLinks />
//             </div>
//         </nav>
//     )
// }

import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import SignedInLinks from "./SignedInLinks";

export default function Navbar() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
            <div>
            <SignedInLinks />
            </div>
            
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
      <img src={require("./logo.png")} className="Logo" alt="logo" />
      </button>
    </header>
  );
}

//     return (
//         <nav className="nav-wrapper grey darken-3">
//             <div className="container">
//                 <Link to='/' className="brand-logo">GamersV!be</Link>
//                 <SignedInLinks />
//                 <SignedOutLinks />
//             </div>
//         </nav>
//     )
// }



