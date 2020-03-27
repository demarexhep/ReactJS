import React from 'react';
import { Welcome } from './Welcome';
import { User } from './User'
import { FruitList } from './FruitList';

export class App extends React.Component {
  render() {
    var user = {
      name: 'Kire',
      adress: 'skopje',
      age: 25,
      city: "gostivar"
    }
    var fruits = ['banana', 'apple', 'potato']
    return (
      <div id="app">
        <h2>Hello</h2>
        <Welcome
          name={'Filip'}
          lastName={'dzukovski'}
          age={25}
          flag={false}
        />
        <User
          korisnik={user}
        />
     

      <FruitList
        ovosje={fruits}

      />
      </div>
    )
  }
}