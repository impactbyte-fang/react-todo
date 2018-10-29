import React, { Component } from "react"
import { Container } from "reactstrap"

import Header from "./Header"
import TodoItems from "./TodoItems"

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
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

  handleComplete = event => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === Number(event.target.dataset.id)) {
        todo.complete = !todo.complete
      }
      return todo
    })

    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <Container>
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

        <TodoItems
          todos={this.state.todos}
          handleComplete={this.handleComplete}
        />
      </Container>
    )
  }
}

export default App
