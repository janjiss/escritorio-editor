/* This rule removes any any marks from title node */

export default {
	match: node => {
		return node.type === 'title';
	},
	validate: titleNode => {
		return !titleNode.getMarks().isEmpty();
	},
	normalize: (transform, titleNode) => {
		titleNode.getMarks().forEach(mark => {
			titleNode.nodes.forEach(textNode => {
				if (textNode.kind === 'text') {
					transform.removeMarkByKey(
						textNode.key,
						0,
						textNode.text.length,
						mark
					);
				}
			});
		});

		return transform;
	}
};
