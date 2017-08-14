import React, { Component } from "react"
import compose from "./compose"
import { addMark } from "./StateChanges"

class Menu extends Component {
  getState = () => {
    return this.props.state
  }
  render = () => {
    return (
      <div>
        <span
          onMouseDown={e => {
            e.preventDefault()
            compose(this.props.onChange, addMark.bind(null, "bold"), this.getState)()
          }}
        >
          B
        </span>
      </div>
    )
  }
}

export default Menu
