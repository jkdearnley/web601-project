// import React from 'react'


// const DiscussionList = () => {
//     return (
//         <div className="discussion-list section">
//             <DiscussionSummary />
//             <DiscussionSummary />
//             <DiscussionSummary />
//             <DiscussionSummary />
//             <DiscussionSummary />
//             <DiscussionSummary />
//         </div>
//     )
// }

// export default DiscussionList



  
import React from 'react'
import { Link } from 'react-router-dom'
import DiscussionSummary from './DiscussionSummary'

//const myBooks = [];
export default class DiscussionList extends React.Component {
   
    constructor(props) {
		super(props);
		   this.state = ({
		      isFetching: false,
              discussions: [],
		   })
	}


    // Retrieves all the books from the database and saves them in the array books
    GetDiscussions() {
        fetch('http://localhost:4200/api/discussions')
		.then(res => res.json())
		.then(data => {
			if(data.cod === '404') {
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
		}).then (() => {
            this.setState({...this.state, isFetching: false});
        })
		.catch(err => {
		   console.log(err);
        })	
    }

    // When the component has mounted, the books will be retrieved
    componentDidMount() {
        this.GetDiscussions();
        //this.timer = setInterval(() => this.GetUserBooks(), 10000);
        //setTimeout(function() {console.log(this.state.books)}, 8000)
	}


    render() {
        if (!this.state.isFetching) {
            console.log(this.state.discussions)
            return(
        
                <div className="discussion-list section">
                    {this.state.discussions.map((d) => 
                        <DiscussionSummary discussion={d}/>
                        //console.log(d)
                    )}
                    
                </div>
        
                )
        }else {
            return (
                <div>Loading...</div>
            )
        }

    }

}


