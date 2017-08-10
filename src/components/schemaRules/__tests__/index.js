import readYaml from "read-yaml-promise"
import { resolve } from "path"
import { Schema, Raw } from "slate"
import fs from "fs-promise"
import schema from "../../schema"
import transformations from "../"

const transformationNames = [
  "transformFirstLineToTitle",
  "removeAllTitleBlocksExceptFirst",
  "insertAtLeastOneParagraph",
  "titleCanNotHaveMarks",
  "titleCanNotHaveInlines"
]

describe("schema rules", async () => {
  for (const transform of transformationNames) {
    describe(`${transform}()`, () => {
      it(transform, async () => {
        const testDir = resolve(__dirname, transform)
        const input = await readYaml(resolve(testDir, "input.yml"))
        const expected = await readYaml(resolve(testDir, "output.yml"))

        const state = Raw.deserialize(input, { terse: true })
        const transformedState = state.transform().normalize(Schema.create(schema)).apply()
        const output = Raw.serialize(transformedState, { terse: true })
        expect(output).toEqual(expected)
      })
    })
  }
})
