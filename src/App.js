import React, { Component } from "react"

import Header from "./Header"
// import TodoInput from "./TodoInput"
// import TodoItems from "./TodoItems"

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: "",
      todos: [
        {
          id: 0,
          text: "Eat breakfast",
          complete: false
        },
        {
          id: 1,
          text: "Design a new app",
          complete: true
        },
        {
          id: 2,
          text: "Go home after work",
          complete: false
        }
      ]
    }
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const newTodos = this.state.todos.concat({
      id: this.state.todos.length,
      text: this.state.input,
      complete: false
    })

    this.setState({
      input: "",
      todos: newTodos
    })
  }

  render() {
    return (
      <div>
        <Header />

        {/* <TodoInput /> */}
        <section>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Insert your todo..."
              onChange={this.handleChange}
              value={this.state.input}
            />
            <input type="submit" value="ADD" />
          </form>
        </section>

        {/* <TodoItems /> */}
        <section>
          {this.state.todos.map(item => {
            return (
              <div key={item.id}>
                [{item.complete ? <span>✓</span> : <span> </span>}] {item.text}
              </div>
            )
          })}
        </section>
      </div>
    )
  }
}

export default App
