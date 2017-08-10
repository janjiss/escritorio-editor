class StateChanges {
  constructor(props) {
    this.getState = props.getState
    this.onChange = props.onChange
  }

  addMark = (type, e) => {
    e.preventDefault()
    const state = this.getState().transform().addMark({ type: type }).apply()
    this.onChange(state)
  }

  addUnorderedList = e => {
    e.preventDefault()
    const state = this.getState()
      .transform()
      .wrapBlock({ type: "unorderedList" })
      .setBlock({ type: "listItem" })
      .apply()
    this.onChange(state)
  }
}

export default StateChanges
