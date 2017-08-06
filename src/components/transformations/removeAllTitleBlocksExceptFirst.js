/* Rule that only allows for one title, normalizes by making titles paragraphs */

export default {
	match: node => node.kind === 'document',
	validate: document => {
		const invalidChildren = document.nodes.filter(
			(child, index) => child.type === 'title' && index !== 0
		);
		return invalidChildren.size ? invalidChildren : null;
	},
	normalize: (transform, document, invalidChildren) => {
		let updatedTransform = transform;
		invalidChildren.forEach(child => {
			updatedTransform = transform.setNodeByKey(child.key, 'paragraph');
		});

		return updatedTransform;
	}
};
