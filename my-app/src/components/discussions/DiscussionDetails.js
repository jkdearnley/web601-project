import React from 'react'

const DiscussionDetails = (props) => {
    //const id = props.match.params.id;
    //console.log(props.location.discussionProps)
    const content= props.location.discussionContent
    const title= props.location.discussionTitle
    const date= props.location.discussionDate
    const name= props.location.discussionName
    console.log(props.location.discussionProps)
    return (
        <div className="container section discussion-details">           
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{title}</span>
                    <p>{content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>{name}</div>
                    <div>{date}</div>
                </div>
            </div>          
        </div>       
    )
}

export default DiscussionDetails
