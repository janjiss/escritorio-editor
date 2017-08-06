import { Transform } from 'slate';

export default {
	match: node => node.kind === 'document',
	validate: document =>
		!document.nodes.size || document.nodes.first().type !== 'title'
			? document.nodes
			: null,
	normalize: (transform, document, nodes) => {
		if (!nodes.size) {
			const title = Block.create({ type: 'title', data: {} });
			return transform.insertNodeByKey(document.key, 0, title);
		}

		return transform.setNodeByKey(nodes.first().key, 'title');
	}
};
