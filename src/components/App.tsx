import * as React from "react"
import "./App.css"
import schema from "./schema"
import Menu from "./Menu"
import * as Slate from "slate"
import plugins from "./plugins"

const initialState = Slate.Raw.deserialize(
  {
    nodes: [
      {
        kind: "block",
        type: "paragraph",
        nodes: [
          {
            kind: "text",
            text: "A line of text in a paragraph."
          }
        ]
      },
      {
        kind: "block",
        type: "unorderedList",
        nodes: [
          {
            kind: "block",
            type: "listItem",
            nodes: [
              {
                kind: "text",
                text: "Hello from list tiem"
              }
            ]
          },
          {
            kind: "block",
            type: "listItem",
            nodes: [
              {
                kind: "text",
                text: "Hello from list tiem"
              }
            ]
          },
          {
            kind: "block",
            type: "listItem",
            nodes: [
              {
                kind: "text",
                text: "Hello from list tiem"
              }
            ]
          }
        ]
      }
    ]
  },
  { terse: true }
)

class App extends React.Component<object, object> {
  state = {
    state: initialState
  }

  onChange = (state: Slate.State) => {
    this.setState({ state })
  }

  public render() {
    return (
      <div id="editor">
        <Menu onChange={this.onChange} state={this.state.state} />
        <Slate.Editor
          plugins={plugins}
          placeholder="Start typing"
          schema={schema}
          state={this.state.state}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default App
