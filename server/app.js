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
  const fake_db = {
    'User': {
      '1': {
        id: 1,
        first_name: "Matt",
        last_name: "Peebles"
      }
    },
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
  
  
  const connectionString = `mongodb+srv://eurovision:W5pXos1nasxoVVDB@eurovision0.luzxqpa.mongodb.net/eurovision?retryWrites=true&w=majority`;
  const songSchema = new mongoose.Schema({
    title: String,
    country: String,
    artist: String,
    year: Number
  })
  const connection = await mongoose.connect(connectionString);
  
  // The root provides a resolver function for each API endpoint
  var root = {
    me: () => {
      return fake_db['User']['1'];
    },
    songs: async () => {
      const Song = connection.model('Song', songSchema);
      return await Song.find();
    },
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
