class StateChanges {
	constructor(props) {
		this.getState = props.getState;
	}

	toggleMark = type => {
		return this.getState().transform().addMark({ type: type }).apply();
	};
}

export default StateChanges;
