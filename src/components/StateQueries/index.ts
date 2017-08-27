import * as Slate from "slate"

export const hasBlock = (type: BlockType, state: Slate.State) => {
  const hasParentOfType = state.blocks.some((block: Slate.Block) => {
    return !!state.document.getClosest(block.key, (parent: Slate.Node) => parent.type === type)
  })

  const isSameType = state.blocks.some((block: Slate.Block) => {
    return block.type === type
  })

  return hasParentOfType || isSameType
}

export const hasMark = (type: MarkType, state: Slate.State) => {
  return state.marks.some((mark: Slate.Mark) => {
    return mark.type === type
  })
}
