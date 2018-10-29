import React, { Component } from "react"

import Header from "./Header"
import TodoInput from "./TodoInput"
import TodoItems from "./TodoItems"
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TodoInput />
        <TodoItems />
      </div>
    )
  }
}

export default App
