/// <reference path="../node_modules/immutable/dist/immutable.d.ts" />

declare namespace SlateJS {
  class Node {
    key: string
    type: string
    kind: string
    text: string
    length: number
    nodes: Immutable.List<Node>
    getInlines(): Immutable.List<Node>
    getMarks(): Immutable.Set<Mark>
    getNextSibling(key: string): Node
    getPreviousSibling(key: string): Node
    getBlocksAtRange(range: Selection): Immutable.List<Node>
    getClosest(key: string | Node, match: (node: Node) => boolean): Node | void
    getDepth(key: string): number
  }

  class Block extends Node {
    static create({ type, data }: { type: string; data: object }): Block
    data: Immutable.Map<string, any>
  }
  //export const Block: IBlock

  class Mark extends Node {}

  class Inline extends Node {}

  class Document extends Node {}

  class Selection {}

  class Transform {
    insertNodeByKey(key: string, index: number, block: Node): Transform
    unwrapBlockByKey(key: string, properties?: object): Transform
    collapseToStartOf(node: Node): Transform
    move(position: number): Transform
    extendToEndOf(node: Node): Transform
    extend(position: number): Transform
    addMark({ type }: { type: string }): Transform
    removeMark(key: string): Transform
    setBlock({ type }: { type: string }): Transform
    wrapBlock({ type }: { type: string }): Transform
    unwrapBlock(): Transform
    setNodeByKey(key: string, type: string): Transform
    unwrapInlineByKey(key: string): Transform
    splitBlock(depth: number): Transform
    splitNodeByKey(key: string, offset: number): Transform
    moveNodeByKey(key: string, newKey: string, newIndex: number): Transform
    removeNodeByKey(key: string): Transform
    collapseToStartOfNextBlock(): Transform
    removeMarkByKey(key: string, offset: number, length: number, mark: Mark, options?: object): Transform
    apply(): State
  }

  class Schema {
    static create(schema: Schema): any
  }

  class State {
    startOffset: number
    focusBlock: Block
    endBlock: Block
    isExpanded: boolean
    blocks: Immutable.List<Block>
    document: Document
    marks: Immutable.List<Mark>
    transform: () => Transform
    selection: Selection
  }

  class Raw {
    static serialize(state: State, options?: object): object
    static deserialize(rawState: object, options?: object): any
  }

  class Editor extends React.Component<any, any> {}
}

declare module "slate" {
  export = SlateJS
}
