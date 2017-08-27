import * as React from "react"
import * as Slate from "slate"
import compose from "./compose"
import { setBlock, addList, removeMark, addMark } from "./StateChanges"
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
        <span style={this.renderActiveMarkClass("bold")} onMouseDown={e => this.handleMarkButton("bold", e)}>
          {" B "}
        </span>
        <span style={this.renderActiveMarkClass("italic")} onMouseDown={e => this.handleMarkButton("italic", e)}>
          {" I "}
        </span>
        <span style={this.renderActiveMarkClass("underline")} onMouseDown={e => this.handleMarkButton("underline", e)}>
          {" U "}
        </span>
        <span
          style={this.renderActiveBlockClass("headerOne")}
          onMouseDown={e => this.handleBlockButton("headerOne", e)}
        >
          {" H1 "}
        </span>
        <span
          style={this.renderActiveBlockClass("unorderedList")}
          onMouseDown={e => this.handleListButton("unorderedList", e)}
        >
          {" UL "}
        </span>
        <span
          style={this.renderActiveBlockClass("orderedList")}
          onMouseDown={e => this.handleListButton("orderedList", e)}
        >
          {" OL "}
        </span>
      </div>
    )
  }

  renderActiveBlockClass(blockType: BlockType): object {
    return hasBlock(blockType, this.getState()) ? { color: "grey" } : {}
  }

  renderActiveMarkClass(markType: MarkType): object {
    return hasMark(markType, this.getState()) ? { color: "grey" } : {}
  }

  handleMarkButton = (markType: MarkType, event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    if (hasMark(markType, this.getState())) {
      compose(this.props.onChange, removeMark.bind(null, markType), this.getState)()
    } else {
      compose(this.props.onChange, addMark.bind(this, markType), this.getState)()
    }
  }

  handleListButton = (blockType: BlockType, event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    if (hasBlock(blockType, this.getState())) {
      compose(this.props.onChange, setBlock.bind(null, "paragraph"), this.getState)()
    } else {
      compose(this.props.onChange, addList.bind(null, blockType), this.getState)()
    }
  }

  handleBlockButton = (blockType: BlockType, event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    if (hasBlock(blockType, this.getState())) {
      compose(this.props.onChange, setBlock.bind(null, "paragraph"), this.getState)()
    } else {
      compose(this.props.onChange, setBlock.bind(this, blockType), this.getState)()
    }
  }
}

export default Menu
