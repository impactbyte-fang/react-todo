import React, { Component } from "react"

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Todo</h1>
        </header>
        <section>
          <form>
            <input type="text" placeholder="Insert your todo..." />
            <input type="button" text="ADD" />
          </form>
        </section>
        <section>
          <div>[ ] Eat breakfast</div>
          <div>[ ] Design a new app</div>
          <div>[ ] Go home after work</div>
        </section>
      </div>
    )
  }
}

export default App
