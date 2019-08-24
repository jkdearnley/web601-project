import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/' className='btn blue darken-1'>Sign In</NavLink></li>
            <li><NavLink to='/'>Sign Up</NavLink></li>
           
        </ul>
    )
}

export default SignedOutLinks