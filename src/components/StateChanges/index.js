class StateChanges {
	constructor(props) {
		this.getState = props.getState;
	}

	toggleMark = type => {
		console.log(this.getState());
	};
}

export default StateChanges;
