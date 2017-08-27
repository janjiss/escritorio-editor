import { setBlock } from "../../"
import * as Slate from "slate"

export default (state: Slate.State) => {
  const paragraphNode = state.document.nodes.get(1)
  const unorderedListNode = state.document.nodes.get(2)
  const newState = state.transform().collapseToStartOf(paragraphNode).extendToEndOf(unorderedListNode).apply()

  return setBlock("headerOne", newState)
}
