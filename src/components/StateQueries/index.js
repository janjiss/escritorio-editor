export const hasBlock = (type, state) => {
  const hasParentOfType = state.blocks.some(block => {
    return !!state.document.getClosest(block.key, parent => parent.type == type)
  })

  const isSameType = state.blocks.some(block => {
    return block.type === type
  })

  return hasParentOfType || isSameType
}

export const hasMark = (type, state) => {
  return state.marks.some(mark => {
    return mark.type === type
  })
}
