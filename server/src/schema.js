const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query{
    "Query to get tracks for the main page grid"
    tracksForHome: [Track!]!
    track: Track
  }

  "A track is group of Modules that teaches about a topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "The tracks description, can be in Markdown format"
    description: String
    "The number of time a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Modules"
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's Title"
    title: String!
    "The Modile's length in minutes"
    length: Int
  }
  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }
`
module.exports = typeDefs;