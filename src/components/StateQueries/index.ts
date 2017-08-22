import * as Slate from "slate"

export const hasBlock = (type: string, state: Slate.State) => {
  const hasParentOfType = state.blocks.some((block: Slate.Block) => {
    return !!state.document.getClosest(block.key, (parent: Slate.Node) => parent.type === type)
  })

  const isSameType = state.blocks.some((block: Slate.Block) => {
    return block.type === type
  })

  return hasParentOfType || isSameType
}

export const hasMark = (type: string, state: Slate.State) => {
  return state.marks.some((mark: Slate.Mark) => {
    return mark.type === type
  })
}
