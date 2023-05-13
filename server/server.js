var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")

const fake_db = {
  'User': {
    '1': {
      first_name: "Matt",
      last_name: "Peebles"
    }
  },
  'Song': {
    
  }
}

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    me: User
    songs: [Song]
    rankings: [Ranking]
  }
  type User {
    id: String
    first_name: String
    last_name: String
  }
  type Country {
    id: String
    name: String
  }
  type Song {
    id: String
    country: Country
    artist: String
    title: String
    year: Int
  }
  type Score{
    user: User
    points: Int
    song: Song
  }
  type Ranking {
    song: Song
    total: Int
    scores: Score
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
  me: () => {
    return fake_db['User']['1'];
  },
}

var app = express()
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")