import React, { Component } from "react"
import compose from "./compose"
import { addMark, setBlock, addUnorderedList } from "./StateChanges"

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
        <span
          onMouseDown={e => {
            e.preventDefault()
            compose(this.props.onChange, setBlock.bind(null, "headerOne"), this.getState)()
          }}
        >
          H1
        </span>
        <span
          onMouseDown={e => {
            e.preventDefault()
            compose(this.props.onChange, addUnorderedList, this.getState)()
          }}
        >
          UL
        </span>
      </div>
    )
  }
}

export default Menu
