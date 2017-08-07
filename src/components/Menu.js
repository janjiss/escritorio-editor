import React, { Component } from 'react';

class Menu extends Component {
	render() {
		const { stateChanges } = this.props;

		return (
			<div>
				<span onClick={stateChanges.toggleMark.bind('bold')}>B </span>
				<span onClick={stateChanges.toggleMark.bind('italic')}>I </span>
				<span onClick={stateChanges.toggleMark.bind('underline')}>U </span>
			</div>
		);
	}
}

export default Menu;
