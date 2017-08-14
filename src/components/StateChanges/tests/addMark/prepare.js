import { addMark } from "../../"
import { transform } from "slate"

export default state => {
  const paragraphNode = state.document.nodes.get(1)
  const newState = state.transform().collapseToStartOf(paragraphNode).move(5).extend(3).apply()
  return addMark("underline", newState)
}
