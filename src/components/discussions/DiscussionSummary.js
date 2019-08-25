import React from 'react'
import { NavLink } from 'react-router-dom'

const DiscussionSummary = () => {
    return (
        <div className="card z-depth-0 discussion-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">Discussion Title</span>
                <ul className="right">
                    <li><NavLink to='/details' className='btn blue darken-1'>View Discussion</NavLink></li>
                </ul>
                <p>Posted by Jayden</p>
                <p className="grey-text">24th August, 4:20pm</p>
            </div>
        </div>
    )
}


export default DiscussionSummary