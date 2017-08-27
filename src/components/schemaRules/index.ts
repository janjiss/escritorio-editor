import insertAtLeastOneParagraph from "./insertAtLeastOneParagraph"
import removeAllTitleBlocksExceptFirst from "./removeAllTitleBlocksExceptFirst"
import transformFirstLineToTitle from "./transformFirstLineToTitle"
import titleCanNotHaveMarks from "./titleCanNotHaveMarks"
import titleCanNotHaveInlines from "./titleCanNotHaveInlines"
import changeOrphanedListItemsToParagraph from "./changeOrphanedListItemsToParagraph"

export default [
  insertAtLeastOneParagraph,
  removeAllTitleBlocksExceptFirst,
  transformFirstLineToTitle,
  titleCanNotHaveInlines,
  titleCanNotHaveMarks,
  changeOrphanedListItemsToParagraph
]