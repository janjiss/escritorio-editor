import React, { Component } from "react"

class Menu extends Component {
  render() {
    const { stateChanges } = this.props

    return (
      <div>
        <span
          onMouseDown={e => {
            stateChanges.addMark("bold", e)
          }}
        >
          B{" "}
        </span>
        <span
          onMouseDown={e => {
            stateChanges.addMark("italic", e)
          }}
        >
          I{" "}
        </span>
        <span
          onMouseDown={e => {
            stateChanges.addMark("underline", e)
          }}
        >
          U{" "}
        </span>
        <span
          onMouseDown={e => {
            stateChanges.addUnorderedList(e)
          }}
        >
          UL{" "}
        </span>
      </div>
    )
  }
}

export default Menu
