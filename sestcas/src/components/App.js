import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Contact } from './Contact'
import { About } from './About'
import { Home } from './Home'
import { Navigation } from './Navigation'
import axios from 'axios'
import { Userlist } from './Userlist'

export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []

    }
  }
  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers = () => {
    axios({
      url: `https://jsonplaceholder.typicode.com/users`,
      method: "GET"
    })
      .then(res => {
        this.setState({
          users: res.data
        })
      })
      .catch(err => {
        alert(err)
      })
  }

  render() {

    return (

      <div id="app">
        <h1>App</h1>

        <Navigation />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/user-list" render={() => {
            return <Userlist users={this.state.users} />
          }} />
        </Switch>
      </div>
    )
  }
}