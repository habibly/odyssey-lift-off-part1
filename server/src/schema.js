const { gql } = require('apollo-server')

const typeDefs = gql`
type Query{
  "Query to get tracks for the main page grid"
  tracksForHome: [Track!]!
}

"A track is group of Modules that teaches about a topic"
type Track {
  id: ID!
  title: String!
  author: Author!
  thumbnail: String
  length: Int
  modulesCount: Int
}

type Author {
  id: ID!
  name: String!
  photo: String
}
`
module.exports = typeDefs;