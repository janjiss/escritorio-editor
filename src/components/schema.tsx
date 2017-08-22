import * as React from "react"
import * as Slate from "slate"
import transformations from "./schemaRules"

interface SchemaNodeProps {
  attributes: object
  children: Array<React.ReactElement<React.ReactChild>>
  node: Slate.Block
}

interface SchemaMarkProps {
  attributes: object
  children: Array<React.ReactElement<React.ReactChild>>
  node: Slate.Mark
}

const schema = {
  nodes: {
    paragraph: (props: SchemaNodeProps) => {
      return (
        <p {...props.attributes}>
          {props.children}
        </p>
      )
    },
    title: (props: SchemaNodeProps) => {
      return (
        <h1 {...props.attributes}>
          {props.children}
        </h1>
      )
    },
    headerOne: (props: SchemaNodeProps) => {
      return (
        <h1 {...props.attributes}>
          {props.children}
        </h1>
      )
    },
    headerTwo: (props: SchemaNodeProps) => {
      return (
        <h2 {...props.attributes}>
          {props.children}
        </h2>
      )
    },
    headerThree: (props: SchemaNodeProps) => {
      return (
        <h3 {...props.attributes}>
          {props.children}
        </h3>
      )
    },
    listItem: (props: SchemaNodeProps) => {
      return (
        <li {...props.attributes}>
          {props.children}
        </li>
      )
    },
    unorderedList: (props: SchemaNodeProps) => {
      return (
        <ul {...props.attributes}>
          {props.children}
        </ul>
      )
    },
    orderedList: (props: SchemaNodeProps) => {
      return (
        <ol {...props.attributes}>
          {props.children}
        </ol>
      )
    },
    link: (props: SchemaNodeProps) => {
      const { data } = props.node
      return (
        <a {...props.attributes} href={data.get("href")}>
          {props.children}
        </a>
      )
    }
  },
  marks: {
    bold: (props: SchemaMarkProps) => {
      return (
        <strong {...props.attributes}>
          {props.children}
        </strong>
      )
    },
    italic: (props: SchemaMarkProps) => {
      return (
        <i {...props.attributes}>
          {props.children}
        </i>
      )
    },
    underline: (props: SchemaMarkProps) => {
      return (
        <u {...props.attributes}>
          {props.children}
        </u>
      )
    }
  },
  rules: transformations
}

export default schema
