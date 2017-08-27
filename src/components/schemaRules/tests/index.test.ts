import readYaml from "../../../read-yaml-promise"
import { resolve } from "path"
import { Schema, Raw } from "slate"
import schema from "../../schema"

const transformationNames = [
  "transformFirstLineToTitle",
  "removeAllTitleBlocksExceptFirst",
  "insertAtLeastOneParagraph",
  "titleCanNotHaveMarks",
  "titleCanNotHaveInlines",
  "changeOrphanedListItemsToParagraph"
]

describe("schema rules", async () => {
  for (const transform of transformationNames) {
    describe(`${transform}()`, () => {
      it(transform, async () => {
        const testDir = resolve(__dirname, transform)
        const [input, expected] = await Promise.all([
          readYaml(resolve(testDir, "input.yml")),
          readYaml(resolve(testDir, "output.yml"))
        ])

        const state = Raw.deserialize(input, { terse: true })
        const transformedState = state.transform().normalize(Schema.create(schema)).apply()
        const output = Raw.serialize(transformedState, { terse: true })
        expect(output).toEqual(expected)
      })
    })
  }
})
