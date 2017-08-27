import { setBlock } from "../../"
import * as Slate from "slate"

export default (state: Slate.State) => {
  const secondListItemNode = state.document.nodes.get(1).nodes.get(1)
  const newState = state.transform().collapseToStartOf(secondListItemNode).apply()

  return setBlock("paragraph", newState)
}
