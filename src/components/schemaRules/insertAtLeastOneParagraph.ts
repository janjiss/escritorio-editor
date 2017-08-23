import * as Slate from "slate"
/* Rule that forces at least one paragraph, normalizes by inserting an empty paragraph */

export default {
  match: (node: Slate.Node) => node.kind === "document",
  validate: (document: Slate.Document) => (document.nodes.size < 2 ? true : null),
  normalize: (transform: Slate.Transform, document: Slate.Document) => {
    const emprtyParagraph = Slate.Block.create({ type: "paragraph", data: {} })
    return transform.insertNodeByKey(document.key, 1, emprtyParagraph)
  }
}
