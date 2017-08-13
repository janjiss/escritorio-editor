/* Rule that only allows for one title, normalizes by making titles paragraphs */

export default {
  match: node => node.kind === "document",
  validate: document => {
    const orphanedListItems = document.nodes.filter((child, index) => child.type === "listItem")
    return orphanedListItems.size ? orphanedListItems : null
  },
  normalize: (transform, document, orphanedListItems) => {
    return orphanedListItems.reduce((acc, child) => {
      return acc.setNodeByKey(child.key, "paragraph")
    }, transform)
  }
}