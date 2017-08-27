import { addList } from "../../"
import * as Slate from "slate"

export default (state: Slate.State) => {
  const paragraphNode = state.document.nodes.get(1)
  const newState = state.transform().collapseToStartOf(paragraphNode).move(5).extend(3).apply()
  return addList("unorderedList", newState)
}
