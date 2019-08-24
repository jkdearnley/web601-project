import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/' className='btn green lighten-1'>Start Discussion</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating green lighten-1'></NavLink></li>
        </ul>
    )
}

export default SignedInLinks