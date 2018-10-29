import React from "react"

class TodoInput extends React.Component {
  constructor() {
    super()
    this.state = {
      input: ""
    }
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state.input)
    this.setState({
      input: ""
    })
  }

  render() {
    return (
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
    )
  }
}

export default TodoInput
