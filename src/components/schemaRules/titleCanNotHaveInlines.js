/* This rule removes any any inlines from title node */

export default {
	match: node => {
		return node.type === 'title';
	},
	validate: titleBlock => {
		return !titleBlock.getInlines().isEmpty();
	},
	normalize: (transform, titleBlock) => {
		transform.unwrapInlineByKey(titleBlock.key);

		return transform;
	}
};
