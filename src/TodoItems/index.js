import React from "react"

const TodoItems = props => (
  <section>
    {props.todos.map(item => {
      return (
        <div key={item.id}>
          <span data-id={item.id} onClick={props.handleComplete}>
            [{item.complete ? "✓" : " "}]
          </span>{" "}
          {item.text}
        </div>
      )
    })}
  </section>
)

export default TodoItems
