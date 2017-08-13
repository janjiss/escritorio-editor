import { Block } from "slate"
/* Rule that forces at least one paragraph, normalizes by inserting an empty paragraph */

export default {
  match: node => node.kind === "document",
  validate: document => (document.nodes.size < 2 ? true : null),
  normalize: (transform, document) => {
    const emprtyParagraph = Block.create({ type: "paragraph", data: {} })
    return transform.insertNodeByKey(document.key, 1, emprtyParagraph)
  }
}
