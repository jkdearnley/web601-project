import React from 'react'
import { Link } from 'react-router-dom'
import DiscussionSummary from './DiscussionSummary'

export default class DiscussionList extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            isFetching: false,
            discussions: [],
        })
    }
    // Retrieves all the discussions from the database and saves them in the array discussions
    GetDiscussions() {
        fetch('http://localhost:4200/api/discussions')
            .then(res => res.json())
            .then(data => {
                if (data.cod === '404') {
                    this.setState({
                        isFetching: false,
                    })
                } else {
                    //console.log(data)
                    this.setState({
                        isFetching: true,
                        discussions: data,
                    });
                }
            }).then(() => {
                this.setState({ ...this.state, isFetching: false });
            })
            .catch(err => {
                console.log(err);
            })
    }

    // When the component has mounted, the discussions will be retrieved
    componentDidMount() {
        this.GetDiscussions();
        this.timer = setInterval(() => this.GetDiscussions(), 500);
        //setTimeout(function() {console.log(this.state.discussions)}, 8000)
    }

    render() {
        if (!this.state.isFetching) {
            console.log(this.state.discussions)
            return (

                <div className="discussion-list section">
                    {this.state.discussions.map((d) =>
                        <DiscussionSummary discussion={d} />
                        //console.log(d)
                    )}

                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }
}


