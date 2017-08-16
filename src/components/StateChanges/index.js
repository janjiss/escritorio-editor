export const addMark = (type, state) => {
  return state.transform().addMark({ type: type }).apply()
}

export const addUnorderedList = state => {
  return state.transform().wrapBlock({ type: "unorderedList" }).setBlock({ type: "listItem" }).apply()
}

export const addOrderedList = state => {
  return state.transform().wrapBlock({ type: "orderedList" }).setBlock({ type: "listItem" }).apply()
}

export const setBlock = (type, state) => {
  const transform = state.transform()
  const blocksToUnwrap = state.document.getBlocksAtRange(state.selection)

  blocksToUnwrap.forEach(block => {
    for (var i = 0; i < state.document.getDepth(block.key); i++) {
      transform.unwrapBlockByKey(block.key)
    }
  })

  return transform.setBlock({ type: type }).apply()
}
