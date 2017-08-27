import insertAtLeastOneParagraph from "./insertAtLeastOneParagraph"
import removeAllTitleBlocksExceptFirst from "./removeAllTitleBlocksExceptFirst"
import transformFirstLineToTitle from "./transformFirstLineToTitle"
import titleCanNotHaveMarks from "./titleCanNotHaveMarks"
import titleCanNotHaveInlines from "./titleCanNotHaveInlines"
import changeOrphanedListItemsToParagraph from "./changeOrphanedListItemsToParagraph"
import joinLists from "./joinLists"

export default [
  insertAtLeastOneParagraph,
  removeAllTitleBlocksExceptFirst,
  transformFirstLineToTitle,
  titleCanNotHaveInlines,
  titleCanNotHaveMarks,
  changeOrphanedListItemsToParagraph,
  joinLists
]
