const schema = {
	nodes: {
		paragraph: props => {
			<p {...props.attributes}>
				{props.children}
			</p>;
		},
		title: props => {
			<h1 {...props.attributes}>
				{props.children}
			</h1>;
		}
	},
	marks: [],
	rules: []
};

export default schema;
