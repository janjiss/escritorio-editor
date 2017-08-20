import readYaml from "read-yaml-promise"
import { resolve } from "path"
import { Raw } from "slate"
import { hasBlock } from "../index"

describe("State queries", () => {
  describe(`hasBlock`, () => {
    it("checks if there is a unorderedList block", async () => {
      const testDir = resolve(__dirname, "hasBlock")
      const input = await readYaml(resolve(testDir, "input.yml"))
      const state = Raw.deserialize(input, { terse: true })
      const unorderedListBlock = state.document.nodes.get(1)
      const stateWithSelection = state.transform().moveToRangeOf(unorderedListBlock).apply()
      expect(hasBlock("unorderedList", stateWithSelection)).toEqual(true)
    })

    it("returns a negative result for title", async () => {
      const testDir = resolve(__dirname, "hasBlock")
      const input = await readYaml(resolve(testDir, "input.yml"))
      const state = Raw.deserialize(input, { terse: true })
      const unorderedListBlock = state.document.nodes.get(1)
      const stateWithSelection = state.transform().moveToRangeOf(unorderedListBlock).apply()
      expect(hasBlock("title", stateWithSelection)).toEqual(false)
    })
  })

  describe(`hasMark`, () => {})
})
