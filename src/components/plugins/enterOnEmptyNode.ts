import * as Slate from "slate"
import { setBlock } from "../StateChanges"

interface EventData {
  key: string
}

export default function() {
  return {
    onKeyDown: (e: KeyboardEvent, data: EventData, state: Slate.State) => {
      const { startOffset, focusBlock, isExpanded } = state

      // Ignore if key is not enter
      if (data.key !== "enter") {
        return
      }
      // Ignore if the type is paragraph
      if (focusBlock.type === "paragraph") {
        return
      }

      // Ignore if the position of selection start offset is not at the beginning
      if (startOffset !== 0) {
        return
      }

      // Ignore if selection is not expanded
      if (isExpanded) {
        return
      }

      // We don't want to remove formatting if the blocks length is bigger than 0
      if (focusBlock.length > 0) {
        return
      }
      // Ignore we are not in 0 position
      e.preventDefault()
      return setBlock("paragraph", state)
    }
  }
}
