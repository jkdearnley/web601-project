import React from 'react'

const DiscussionDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section discussion-details">           
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Discussion Title - {id}</span>
                    <p>Ipsum qui duis duis dolore eu non fugiat enim eu ad nulla proident eiusmod irure. Voluptate eiusmod aliqua sit ad proident excepteur nulla nisi. Officia eu irure occaecat dolor aute. Ex esse elit aliquip ea pariatur veniam non ad laborum anim amet commodo veniam. In in id eiusmod amet velit culpa. Amet sit dolore ut est velit est proident reprehenderit ipsum aliquip pariatur Lorem.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Jayden Dearnley</div>
                    <div>24th August, 4:20PM</div>
                </div>
            </div>          
        </div>       
    )
}

export default DiscussionDetails
