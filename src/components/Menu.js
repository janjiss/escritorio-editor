import React, { Component } from "react"
import compose from "./compose"
import { addMark, setBlock, addUnorderedList, removeMark } from "./StateChanges"
import { hasMark, hasBlock } from "./StateQueries"

class Menu extends Component {
  getState = () => {
    return this.props.state
  }

  render = () => {
    return (
      <div>
        <span
          style={hasMark("bold", this.getState()) ? { color: "grey" } : null}
          onMouseDown={e => {
            e.preventDefault()

            if (hasMark("bold", this.getState())) {
              compose(this.props.onChange, removeMark.bind(null, "bold"), this.getState)()
            } else {
              compose(this.props.onChange, addMark.bind(null, "bold"), this.getState)()
            }
          }}>
          B
        </span>
        <span
          style={hasBlock("headerOne", this.getState()) ? { color: "grey" } : null}
          onMouseDown={e => {
            e.preventDefault()

            if (hasBlock("headerOne", this.getState())) {
              compose(this.props.onChange, setBlock.bind(null, "paragraph"), this.getState)()
            } else {
              compose(this.props.onChange, setBlock.bind(null, "headerOne"), this.getState)()
            }
          }}>
          H1
        </span>
        <span
          style={hasBlock("unorderedList", this.getState()) ? { color: "grey" } : null}
          onMouseDown={e => {
            e.preventDefault()

            if (hasBlock("unorderedList", this.getState())) {
              compose(this.props.onChange, setBlock.bind(null, "paragraph"), this.getState)()
            } else {
              compose(this.props.onChange, addUnorderedList, this.getState)()
            }
          }}>
          UL
        </span>
      </div>
    )
  }
}

export default Menu
