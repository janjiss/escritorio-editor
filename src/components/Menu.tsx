import * as React from "react"
import * as Slate from "slate"
import compose from "./compose"
import { setBlock, addUnorderedList, removeMark, addMark } from "./StateChanges"
import { hasBlock, hasMark } from "./StateQueries"

interface MenuProps {
  state: Slate.State
  onChange: (state: Slate.State) => void
}
interface MenuState {
  state: Slate.State
}

class Menu extends React.Component<MenuProps, MenuState> {
  getState = () => {
    const { state } = this.props
    return state
  }

  render() {
    return (
      <div>
        <span style={this.renderActiveMarkClass("bold")} onMouseDown={this.handleBoldButton}>
          B
        </span>
        <span style={this.renderActiveBlockClass("headerOne")} onMouseDown={this.handleHeaderOneButton}>
          H1
        </span>
        <span style={this.renderActiveBlockClass("unorderedList")} onMouseDown={this.handleUnorderedListButton}>
          UL
        </span>
      </div>
    )
  }

  renderActiveBlockClass(blockType: string): object {
    return hasBlock(blockType, this.getState()) ? { color: "grey" } : {}
  }

  renderActiveMarkClass(markType: string): object {
    return hasMark(markType, this.getState()) ? { color: "grey" } : {}
  }

  handleBoldButton = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    if (hasMark("bold", this.getState())) {
      compose(this.props.onChange, removeMark.bind(null, "bold"), this.getState)()
    } else {
      compose(this.props.onChange, addMark.bind(this, "bold"), this.getState)()
    }
  }

  handleHeaderOneButton = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    if (hasBlock("headerOne", this.getState())) {
      compose(this.props.onChange, setBlock.bind(null, "paragraph"), this.getState)()
    } else {
      compose(this.props.onChange, setBlock.bind(this, "headerOne"), this.getState)()
    }
  }

  handleUnorderedListButton = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    if (hasBlock("unorderedList", this.getState())) {
      compose(this.props.onChange, setBlock.bind(null, "paragraph"), this.getState)()
    } else {
      compose(this.props.onChange, addUnorderedList, this.getState)()
    }
  }
}

export default Menu
