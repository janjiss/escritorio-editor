/* Rule that only allows for one title, normalizes by making titles paragraphs */
import * as Slate from "slate"

export default {
  match: (node: Slate.Node) => node.kind === "document",
  validate: (document: Slate.Document) => {
    const invalidChildren = document.nodes.filter(
      (child: Slate.Node, index: number) => child.type === "title" && index !== 0
    )
    return invalidChildren.size ? invalidChildren : null
  },
  normalize: (transform: Slate.Transform, document: Slate.Document, invalidChildren: Immutable.List<Slate.Node>) => {
    return invalidChildren.reduce((acc: Slate.Transform, value: Slate.Node) => {
      return acc.setNodeByKey(value.key, "paragraph")
    }, transform)
  }
}
