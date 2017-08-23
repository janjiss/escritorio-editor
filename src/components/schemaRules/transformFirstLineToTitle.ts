import * as Slate from "slate"

export default {
  match: (node: Slate.Node) => node.kind === "document",
  validate: (document: Slate.Node) =>
    !document.nodes.size || document.nodes.first().type !== "title" ? document.nodes : null,
  normalize: (transform: Slate.Transform, document: Slate.Node, nodes: Immutable.List<Slate.Node>) => {
    if (!nodes.size) {
      const title = Slate.Block.create({ type: "title", data: {} })
      return transform.insertNodeByKey(document.key, 0, title)
    }

    return transform.setNodeByKey(nodes.first().key, "title")
  }
}
