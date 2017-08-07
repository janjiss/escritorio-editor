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
		},
		headerOne: props => {
			return (
				<h1 {...props.attributes}>
					{props.children}
				</h1>
			);
		},
		headerTwo: props => {
			return (
				<h2 {...props.attributes}>
					{props.children}
				</h2>
			);
		},
		headerThree: props => {
			return (
				<h3 {...props.attributes}>
					{props.children}
				</h3>
			);
		},
		listItem: props => {
			return (
				<li {...props.attributes}>
					{props.children}
				</li>
			);
		},
		unorderedList: props => {
			return (
				<ul {...props.attributes}>
					{props.children}
				</ul>
			);
		},
		orderedList: props => {
			return (
				<ol {...props.attributes}>
					{props.children}
				</ol>
			);
		},
		link: props => {
			const { data } = props.node;
			return (
				<a {...props.attributes} href={data.get('href')}>
					{props.children}
				</a>
			);
		}
	},
	marks: {
		bold: props => {
			return (
				<strong {...props.attributes}>
					{props.children}
				</strong>
			);
		},
		italic: props => {
			return (
				<i {...props.attributes}>
					{props.children}
				</i>
			);
		},
		underline: props => {
			return (
				<u {...props.attributes}>
					{props.children}
				</u>
			);
		}
	},
	rules: transformations
};

export default schema;
