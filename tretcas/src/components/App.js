import React from 'react'
//import {Filmovi} from './Filmovi';


export class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            age: 0
        }

    }
    // handleUsernameChange = (event) => {
    //     this.setState({
    //         username: event.target.value

    //     })
    // }
    // handlePasswordChange = (event) => {
    //     this.setState({
    //         password: event.target.value

    //     })
    // }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    showVlues = (user, pass, age) => {
        alert(`Username : ${user}\nPassword : ${pass}\nAge : ${age}`)
    }

    render() {
        // console.log(this.state);
   
        return (
            <div id="app">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />
                <br />
                <h3>{this.state.username}</h3>
                <br />
                <input type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                />
                <br />
                <h3>{this.state.password}</h3>
                <br />
                <input
                    type="number"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.handleInputChange}
                    name="age"
                />
                <h3>{this.state.age}</h3>

                <button
                    type="button"
                    onClick={() => { this.showVlues(this.state.username, this.state.password, this.state.age) }}
                >Submit</button>
                
            </div>
        )
    }
}