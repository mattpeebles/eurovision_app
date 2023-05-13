var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")
var cors = require('cors')

const fake_db = {
  'User': {
    '1': {
      id: 1,
      first_name: "Matt",
      last_name: "Peebles"
    }
  },
  'Song': {
  '1': {
      id: '1',
      country: 'Finland',
      artist: 'Käärijä',
      title: 'Cha Cha Cha',
  },
  '2': {
      id: '2',
      country: 'France',
      artist: 'La Zarra',
      title: 'Évidemment',
  },
  '3': {
      id: '3',
      country: 'Italy',
      artist: 'Marco Mengoni',
      title: 'Due vite',
  }, 
  '4': {
      id: '4',
      country: 'Portugal',
      artist: 'Mimicat',
      title: 'Ai coração',
  }, 
  '5': {
      id: '5',
      country: 'Serbia',
      artist: 'Luke Black',
      title: 'Samo mi se spava',
  }, 
  '6': {
      id: '6',
      country: 'Spain',
      artist: 'Blanca Paloma',
      title: 'Eaea',
  }, 
  '7': {
      id: '7',
      country: 'Sweden',
      artist: 'Loreen',
      title: 'Tattoo',
  }, 
  '8': {
      id: '8',
      country: 'Switzerland',
      artist: 'Remo Forrer',
      title: 'Watergun',
  }, 
  '9': {
      id: '9',
      country: 'Croatia',
      artist: 'Let 3',
      title: 'Mama ŠČ!',
  }, 
  '10': {
      id: '10',
      country: 'Czech Republic',
      artist: 'Vesna',
      title: 'My Sister\'s Crown',
  }, 
  '11': {
      id: '11',
      country: 'Germany',
      artist: 'Lord of the Lost',
      title: 'Blood & Glitter',
  }, 
  '12': {
      id: '12',
      country: 'Israel',
      artist: 'Noa Kirel',
      title: 'Unicorn',
  }, 
  '13': {
      id: '13',
      country: 'Moldova',
      artist: 'Pasha Parfeni',
      title: 'Soarele și luna',
  }, 
  '14': {
      id: '14',
      country: 'Norway',
      artist: 'Alessandra',
      title: 'Queen of Kings',
  }, 
  '15': {
      id: '15',
      country: 'Ukraine',
      artist: 'Tvorchi',
      title: 'Heart of Steel',
  }, 
  '16': {
      id: '16',
      country: 'United Kingdom',
      artist: 'Mae Muller',
      title: 'I Wrote a Song',
  },
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
    country: String
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
  songs: () => {
    return Object.values(fake_db['Song'])
  },
}

var app = express()
app.use(cors())
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)
const port = process.env.PORT || 4000;
app.listen(port)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")