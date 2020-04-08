import React from 'react'

export class Todos extends React.Component {
    render() {

        return (
            <div id="todos">
                <h2>todos</h2>
                <ol>
                    {this.props.todoList.map((todo, i) => {

                        return (
                            <li className={todo.done ? "marked-done" : ""} key={i}>
                                <span>{todo.todo}</span>
                                <input
                                    type="button"
                                   
                                    value={"Delete"}
                                    onClick={() => { this.props.deleteTodo(todo) }}
                                />
                            </li>
                        )

                    })}
                </ol>
            </div>

        )
    }
}