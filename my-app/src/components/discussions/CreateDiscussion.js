import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class CreateDiscussion extends Component {
    state = {
        title: '',
        content: '',
        redirect: false
    }
    componentDidMount(){
        this.setState({
            redirect: false
        })  
    }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect exact to='/' />
    }
  }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:4200/api/discussions', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
             "title": this.title.value,
             "content": this.content.value,
             "UserID": 1
            })});
        console.log("Discussion added");
        console.log(this.state);
        // setTimeout(function () {
            
        // }, 300);
        this.setState({
            redirect: true
        })
    }
    render() {
        return (
            <div className="container">{this.renderRedirect()}
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Start a Discussion</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input ref={(ref) => {this.title = ref}} type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea ref={(ref) => {this.content = ref}} id="content"className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn blue darken-1 z-depth-0" type="submit">Post</button>
                    </div>

                </form>
            </div>
        )
    } 
}
export default CreateDiscussion