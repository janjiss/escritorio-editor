/* This rule removes any any marks from title node */
import * as Slate from "slate"

export default {
  match: (node: Slate.Node) => {
    return node.type === "title"
  },
  validate: (titleNode: Slate.Node) => {
    return !titleNode.getMarks().isEmpty()
  },
  normalize: (transform: Slate.Transform, titleNode: Slate.Node) => {
    titleNode.getMarks().forEach((mark: Slate.Mark) => {
      titleNode.nodes.forEach((textNode: Slate.Node) => {
        if (textNode.kind === "text") {
          transform.removeMarkByKey(textNode.key, 0, textNode.text.length, mark)
        }
      })
    })

    return transform
  }
}
