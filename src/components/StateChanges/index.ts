import * as Slate from "slate"

export const addMark = (type: MarkType, state: Slate.State): Slate.State => {
  return state.transform().addMark({ type: type }).apply()
}

export const addList = (parentType: BlockType, state: Slate.State): Slate.State => {
  return setBlock("listItem", state).transform().wrapBlock({ type: parentType }).apply()
}

export const setBlock = (type: BlockType, state: Slate.State): Slate.State => {
  const transform = state.transform()

  const blocksToUnwrap = state.document.getBlocksAtRange(state.selection)

  transform.setBlock({ type: type })

  blocksToUnwrap.forEach((block: Slate.Block) => {
    const depth = state.document.getDepth(block.key)
    for (var i = 1; i < depth; i++) {
      transform.unwrapBlockByKey(block.key)
    }
  })

  return transform.apply()
}

export const removeMark = (type: MarkType, state: Slate.State): Slate.State => {
  return state.transform().removeMark(type).apply()
}
