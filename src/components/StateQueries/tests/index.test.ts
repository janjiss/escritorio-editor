import readYaml from "../../../read-yaml-promise"
import { resolve } from "path"
import { Raw } from "slate"
import { hasBlock, hasMark } from "../index"

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

    it("checks if there are no unorderedList blocks", async () => {
      const testDir = resolve(__dirname, "hasBlock")
      const input = await readYaml(resolve(testDir, "input.yml"))
      const state = Raw.deserialize(input, { terse: true })
      const unorderedListBlock = state.document.nodes.get(1)
      const stateWithSelection = state.transform().moveToRangeOf(unorderedListBlock).apply()
      expect(hasBlock("title", stateWithSelection)).toEqual(false)
    })
  })

  describe(`hasMark`, () => {
    it("checks if there is a mark", async () => {
      const testDir = resolve(__dirname, "hasMark")
      const input = await readYaml(resolve(testDir, "input.yml"))
      const state = Raw.deserialize(input, { terse: true })
      const unorderedListBlock = state.document.nodes.get(0)
      const stateWithSelection = state.transform().moveToRangeOf(unorderedListBlock).apply()
      expect(hasMark("underline", stateWithSelection)).toEqual(true)
    })

    it("checks if there are no mark", async () => {
      const testDir = resolve(__dirname, "hasMark")
      const input = await readYaml(resolve(testDir, "input.yml"))
      const state = Raw.deserialize(input, { terse: true })
      const unorderedListBlock = state.document.nodes.get(1)
      const stateWithSelection = state.transform().moveToRangeOf(unorderedListBlock).apply()
      expect(hasMark("underline", stateWithSelection)).toEqual(false)
    })
  })
})
