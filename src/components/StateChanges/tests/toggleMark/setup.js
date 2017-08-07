import StateChanges from '../../';
import { transform } from 'slate';

export default state => {
	const stateChanges = new StateChanges({
		getState: () => {
			// Select appropriate paragraph node and create selection
			const paragraphNode = state.document.nodes.get(1);
			return state
				.transform()
				.collapseToStartOf(paragraphNode)
				.move(5)
				.extend(3)
				.apply();
		}
	});

	return stateChanges.toggleMark('underline');
};
