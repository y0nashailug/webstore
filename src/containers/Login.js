import React, { Component } from 'react';
import { userService } from '../services/userService';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const response = await userService.login({
            username: this.state.username,
            password: this.state.password
        });
        console.log(response);
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="username" type="text" onChange={this.handleChange} value={this.state.username} placeholder="Username" />
                    <input name="password" type="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}