class StateChanges {
  constructor(props) {
    this.getState = props.getState
    this.onChange = props.onChange
  }

  addMark = e => {
    e.preventDefault()
    const { value } = e.target.attributes.type
    const state = this.getState().transform().addMark({ type: value }).apply()
    this.onChange(state)
  }
}

export default StateChanges
