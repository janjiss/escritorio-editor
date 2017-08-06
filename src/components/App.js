import React, { Component } from 'react';
import { Editor, Raw } from 'slate';
import './App.css';
import schema from './schema';

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
	state = {
		state: initialState
	};

	onChange = state => {
		this.setState({ state });
	};

	render() {
		return (
			<div id="editor">
				<div>Menu</div>
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
