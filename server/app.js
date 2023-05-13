var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")
const mongoose = require('mongoose');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

main().catch(err => console.log(err));

async function main() {
  // Construct a schema, using GraphQL schema language
  var schema = buildSchema(`
    type Query {
      me(userID: String!): User
      songs: [Song]
      rankings: [Ranking]
      users: [User]
    }
    type User {
      id: String
      name: String
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
  
  
  const connectionString = `mongodb+srv://eurovision:W5pXos1nasxoVVDB@eurovision0.luzxqpa.mongodb.net/eurovision?retryWrites=true&w=majority`;
  const songSchema = new mongoose.Schema({
    title: String,
    country: String,
    artist: String,
    year: Number
  })
  const userSchema = new mongoose.Schema({
    name: String
  })
  const connection = await mongoose.connect(connectionString);
  
  // The root provides a resolver function for each API endpoint
  var root = {
    me: async ({userID}) => {
      const User = connection.model('User', userSchema);
      return User.findById(userID);
    },
    songs: async () => {
      const Song = connection.model('Song', songSchema);
      return await Song.find();
    },
    users: async () => {
      const User = connection.model('User', userSchema);
      return User.find();
    }
  }
  app.use(cors())

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    })
  )
  
  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
}


module.exports = app;
