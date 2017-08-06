import React from 'react';
import transformations from './schemaRules';

const schema = {
	nodes: {
		paragraph: props => {
			return (
				<p {...props.attributes}>
					{props.children}
				</p>
			);
		},
		title: props => {
			return (
				<h1 {...props.attributes}>
					{props.children}
				</h1>
			);
		}
	},
	marks: [],
	rules: transformations
};

export default schema;
