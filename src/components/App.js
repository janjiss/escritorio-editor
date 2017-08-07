import React, { Component } from 'react';
import { Editor, Raw } from 'slate';
import './App.css';
import schema from './schema';
import Menu from './Menu';
import StateChanges from './StateChanges';

const initialState = Raw.deserialize(
	{
		nodes: [
			{
				kind: 'block',
				type: 'paragraph',
				nodes: [
					{
						kind: 'text',
						text: 'A line of text in a paragraph.'
					}
				]
			}
		]
	},
	{ terse: true }
);

class App extends Component {
	constructor(props) {
		super(props);
		this.stateChanges = new StateChanges({ getState: this.getState });
	}

	state = {
		state: initialState
	};

	onChange = state => {
		this.setState({ state });
	};

	getState = () => {
		return this.state.state;
	};

	render() {
		return (
			<div id="editor">
				<Menu stateChanges={this.stateChanges} />
				<Editor
					placeholder="Start typing"
					schema={schema}
					state={this.state.state}
					onChange={this.onChange}
				/>
			</div>
		);
	}
}

export default App;
