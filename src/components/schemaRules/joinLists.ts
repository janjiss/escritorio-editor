import * as Slate from "slate"
/* Rule that joins lists together when next to each other */
interface nodesToJoin {
  previousNode: Slate.Node
  joinableNode: Slate.Node
}

export default {
  match: (node: Slate.Node) => {
    return node.kind === "document"
  },
  validate: (document: Slate.Node) => {
    const joinableNode = document.nodes.find((node: Slate.Node, index: number) => {
      if (!["unorderedList", "orderedList"].includes(node.type)) {
        return false
      }

      const previousNode = document.nodes.get(index - 1)
      if (!previousNode) {
        return false
      }

      return node.type === previousNode.type
    })

    if (joinableNode) {
      const previousNode = document.getPreviousSibling(joinableNode.key)
      return { previousNode, joinableNode }
    }
    return false
  },
  normalize: (transform: Slate.Transform, document: Slate.Node, nodes: nodesToJoin) => {
    const { joinableNode, previousNode } = nodes
    const joinableNodelistItems = joinableNode.nodes

    joinableNodelistItems.forEach((node: Slate.Node, index: number) => {
      transform.moveNodeByKey(node.key, previousNode.key, previousNode.nodes.size + index)
    })
    return transform.removeNodeByKey(joinableNode.key)
  }
}
