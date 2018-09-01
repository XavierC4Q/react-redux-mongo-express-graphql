const express = require('express');
require('dotenv').config()
const graphServer = require('express-graphql')
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const config = require('./config')
const cors = require('cors')

const db = require('mongoose')
const User = require('./models/users')
const session = require('express-session');

const index = require('./routes/index');
const users = require('./routes/users');
const api = require('./routes/api')

const app = express();

const { AllTypes, AllResolvers } = require('./schema/root')
const { makeExecutableSchema } = require('graphql-tools')
const GraphQlSchema = makeExecutableSchema({ typeDefs: AllTypes, resolvers: AllResolvers })


db.connect(config.db, { useNewUrlParser: true }).then(() => {
  console.log("mongoose is connected")
  console.log(`${config.dev}`)
})
db.globalPromise = Promise

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(cors())
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: config.secret,
}))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

passport.use(new LocalStrategy(User.authenticate('local')));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/loggedIn', function(req, res) {
    if(req.session.passport.user) {
      res.send('logged in');
    } else {
      res.send('User not logged in.');
    }
});

app.use('/', index);
app.use('/users', users);
app.use('/api', api)

app.use('/api',
(req,_,next) => {
  return next()
},
graphServer((req, res) => {
  console.log(req)
  return {
    schema: GraphQlSchema,
    context: { req },
    graphiql: true
  }
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
