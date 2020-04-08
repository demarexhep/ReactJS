import React from 'react'
import { Todos } from './Todos'
export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      days: ["Monday", "Tuesday", "Wendsday"],
      car: {
        model: "Volvo",
        year: "2009"
      },
      todos: [
        { id: 1, todo: "listen to react course", done: false },
        { id: 2, todo: "eat lunch", done: false },
        { id: 3, todo: "go to sleep", done: false }
      ],
      newTodo: ""

    }

  }
  updateCar = (carModel, carYear) => {
    this.setState({

      car: {
        ...this.state.car,
        model: carModel,
        year: carYear
      }
    })

  }
  addDays = () => {
    this.setState({
      days: [
        ...this.state.days, "Thursday"
      ]
    })
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  addTodo = (item) => {
    if (item !== "") {
      var objekt = {
        id: this.state.todos.length + 1,
        todo: item,
        done: false
      }
      this.setState({
        todos: [...this.state.todos, objekt],
        newTodo: ""
      })
    } else {
      alert("must type something");
    }
  }
  deleteTodo= (todoObject) => {
    this.setState({
      todos: [...this.state.todos.filter(row =>
        (row.id !== todoObject.id)) ]
  
    })
  }
  render() {
    console.log(this.state)
    return (
      <div id="app">
        <h2>{this.state.car.model}</h2>
        <p>{this.state.car.year}</p>
        <button
          type="button"
          onClick={() => { this.updateCar("nissan", 2012) }}
        >Change Details</button>


        {this.state.days.map((day, i) => {
          return (
            <p key={i}>{day}</p>
          )
        })}
        <button type="button" onClick={() => { this.addDays() }}>Add Days</button>
        <br />
        <br />

        <input
          type="text"
          name="newTodo"
          value={this.state.newTodo}
          placeholder="Add new todo"
          onChange={this.handleChange}
        />
        <button type="button" onClick={() => { this.addTodo(this.state.newTodo) }}>Add todo</button>

        <Todos
          deleteTodo={this.deleteTodo}
          todoList={this.state.todos} />

      </div>

    )
  }
}