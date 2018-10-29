import React from "react"

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
        <div key={item.id}>
          [{item.complete ? <span>✓</span> : <span> </span>}] {item.text}
        </div>
      )
    })}
  </section>
)

export default TodoItems
