import { setBlock } from "../../"
import { transform } from "slate"

export default state => {
  const paragraphNode = state.document.nodes.get(1)
  const unorderedListNode = state.document.nodes.get(2)
  const newState = state
    .transform()
    .moveToRangeOf(unorderedListNode)
    .state.transform()
    .unwrapBlock()
    .setBlock({ type: type })
    .apply()

  return newState
}
