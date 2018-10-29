import React from "react"
import { spawn } from "child_process"

const TODO_ITEMS = [
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

const TodoItems = () => (
  <section>
    {TODO_ITEMS.map(item => {
      return (
        <div>
          [{item.complete ? <span>✓</span> : <span> </span>}] {item.text}
        </div>
      )
    })}
  </section>
)

export default TodoItems
