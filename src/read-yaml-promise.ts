import * as Yaml from "js-yaml"
import * as fs from "fs"

export default async function(path: string): Promise<object> {
  return await Yaml.safeLoad(fs.readFileSync(path, "utf8"))
}
