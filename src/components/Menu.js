import React, { Component } from 'react';

class Menu extends Component {
	render() {
		const { stateChanges } = this.props;

		return (
			<div>
				<span type="bold" onMouseDown={stateChanges.addMark}>
					B{' '}
				</span>
				<span type="italic" onMouseDown={stateChanges.addMark}>
					I{' '}
				</span>
				<span type="underline" onMouseDown={stateChanges.addMark}>
					U{' '}
				</span>
			</div>
		);
	}
}

export default Menu;
