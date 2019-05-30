import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout2"

export default ({ data }) => (
  <Layout>
    <div>
      <h1>My Images</h1>
      <table>
        <theader>
          <tr>
            <th>id</th>
            <th>relativePath</th>
            <th>absolutePath</th>
            <th>extension</th>
          </tr>
        </theader>
        <tbody>
          {data.allFile.edges.map(({ node }) => (
            <tr key={node.id}>
              <td>{node.id}</td>
              <td>{node.relativePath}</td>
              <td>{node.absolutePath}</td>
              <td>{node.extension}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          id
          relativePath
          absolutePath
          extension
        }
      }
    }
  }
`
