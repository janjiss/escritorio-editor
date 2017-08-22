declare module "slate" {
  import * as Immutable from "immutable"

  interface Node {
    key: string
    type: string
    getBlocksAtRange(range: Selection): Immutable.List<Node>
    getClosest(key: string | Node, match: (node: Node) => boolean): Node | void
    getDepth(key: string): number
  }

  interface Block extends Node {
    data: Immutable.Map<string, any>
  }

  interface Mark extends Node {}

  interface Document extends Node {}

  interface Selection {}

  interface Transform {
    unwrapBlockByKey(key: string): Transform
    addMark({ type }: { type: string }): Transform
    removeMark(key: string): Transform
    setBlock({ type }: { type: string }): Transform
    wrapBlock({ type }: { type: string }): Transform
    apply(): State
  }

  interface State {
    blocks: Immutable.List<Block>
    document: Document
    marks: Immutable.List<Mark>
    transform: () => Transform
    selection: Selection
  }

  namespace Raw {
    function deserialize(rawState: object, options?: object): any
  }

  class Editor extends React.Component<any, any> {}
}
