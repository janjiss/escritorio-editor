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
  return state.transform().unwrapBlock().setBlock({ type: type }).apply()
}
