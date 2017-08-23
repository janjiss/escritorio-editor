import * as Slate from "slate"

export default {
  match: (node: Slate.Node) => node.kind === "document",
  validate: (document: Slate.Document) => {
    const orphanedListItems = document.nodes.filter(
      (child: Slate.Node, index: number) => child.type === "listItem" && child.kind === "block"
    )
    return orphanedListItems.size ? orphanedListItems : null
  },
  normalize: (transform: Slate.Transform, document: Document, orphanedListItems: Immutable.List<Slate.Block>) => {
    return orphanedListItems.reduce((acc: Slate.Transform, child: Slate.Block) => {
      return acc.setNodeByKey(child.key, "paragraph")
    }, transform)
  }
}
