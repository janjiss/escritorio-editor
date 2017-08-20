export const addMark = (type, state) => {
  return state.transform().addMark({ type: type }).apply()
}

export const addUnorderedList = state => {
  return setBlock("listItem", state).transform().wrapBlock({ type: "unorderedList" }).apply()
}

export const addOrderedList = state => {
  return setBlock("listItem", state).transform().wrapBlock({ type: "orderedList" }).apply()
}

export const setBlock = (type, state) => {
  const transform = state.transform()

  const blocksToUnwrap = state.document.getBlocksAtRange(state.selection)

  blocksToUnwrap.forEach(block => {
    const depth = state.document.getDepth(block.key)
    for (var i = 0; i < depth; i++) {
      transform.unwrapBlockByKey(block.key)
    }
  })

  return transform.setBlock({ type: type }).apply()
}
