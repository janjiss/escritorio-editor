import readYaml from "read-yaml-promise"
import { resolve } from "path"
import { Schema, Raw } from "slate"
import schema from "../../schema"

const testFolders = ["addMark", "removeMark", "addUnorderedList", "addOrderedList", "setBlock"]

describe("State changes", async () => {
  for (const testFolder of testFolders) {
    describe(testFolder, () => {
      it(testFolder, async () => {
        const testDir = resolve(__dirname, testFolder)
        const [input, expected] = await Promise.all([
          readYaml(resolve(testDir, "input.yml")),
          readYaml(resolve(testDir, "output.yml"))
        ])

        const prepare = require(resolve(testDir, "prepare")).default

        const state = Raw.deserialize(input, { terse: true })
        const preparedState = prepare(state).transform().normalize(Schema.create(schema)).apply()
        const output = Raw.serialize(preparedState, { terse: true })
        expect(output).toEqual(expected)
      })
    })
  }
})
