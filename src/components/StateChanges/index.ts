import * as Slate from "slate";

export const addMark = (type: string, state: Slate.State) => {
  return state.transform().addMark({ type: type }).apply()
}

export const addUnorderedList = (state: Slate.State) => {
  return setBlock("listItem", state).transform().wrapBlock({ type: "unorderedList" }).apply()
}

export const addOrderedList = (state: Slate.State) => {
  return setBlock("listItem", state).transform().wrapBlock({ type: "orderedList" }).apply()
}

export const setBlock = (type: string, state: Slate.State) => {
  const transform = state.transform()

  const blocksToUnwrap = state.document.getBlocksAtRange(state.selection)

  blocksToUnwrap.forEach((block: Slate.Block) => {
    const depth = state.document.getDepth(block.key)
    for (var i = 0; i < depth; i++) {
      transform.unwrapBlockByKey(block.key)
    }
  })

  return transform.setBlock({ type: type }).apply()
}

export const removeMark = (type: string, state: Slate.State) => {
  return state.transform().removeMark(type).apply()
}
