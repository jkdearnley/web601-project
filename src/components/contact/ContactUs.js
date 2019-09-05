import React, { Component } from 'react'

class ContactUs extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Contact Us</h5>

                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="name" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="name" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn blue darken-1 z-depth-0">Submit</button>
                    </div>

                </form>
            </div>
        )
    } 
}
export default ContactUs