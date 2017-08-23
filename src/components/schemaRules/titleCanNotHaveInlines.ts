/* This rule removes any any inlines from title node */
import * as Slate from "slate"

export default {
  match: (node: Slate.Node) => {
    return node.type === "title"
  },
  validate: (titleBlock: Slate.Block) => {
    return !titleBlock.getInlines().isEmpty()
  },
  normalize: (transform: Slate.Transform, titleBlock: Slate.Block) => {
    return transform.unwrapInlineByKey(titleBlock.key)
  }
}
