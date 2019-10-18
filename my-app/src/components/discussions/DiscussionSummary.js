import React from 'react'
import { Link } from 'react-router-dom'

const DiscussionSummary = ({discussion}) => {
    return (
        <div className="card z-depth-0 discussion-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{discussion.title}</span>
                <ul className="right">
                    <li><Link to={{
                        pathname:'/details', discussionContent:discussion.content, discussionTitle:discussion.title, 
                        discussionDate:discussion.dateposted,
                        discussionName:discussion.FirstName + ' ' + discussion.LastName
                    }} className='btn blue darken-1'>View Discussion</Link></li>
                </ul>
                <p>{discussion.FirstName + ' ' + discussion.LastName}</p>
                <p className="grey-text">{discussion.dateposted}</p>
            </div>
        </div>
    )
}


export default DiscussionSummary