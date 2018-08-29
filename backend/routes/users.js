const express = require('express');
const router = express.Router();

const passport = require('passport');
const User = require('../models/users');


function loginRequired(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ status: "Please log in" });
  }
  return next();
}

router.get('/', loginRequired, function(req, res) {
  res.send('homepage')
});

router.post('/register', function(req, res) {
  User.register(new User({ username: req.body.username, email: req.body.email }), req.body.password, function(err, user) {
    if (err) {
      return res.send('error in register');
    }

    passport.authenticate('local')(req, res, function() {
      res.send({
        message: 'success',
        user: req.user
      });
    });
  });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.send('login success');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.send('logout worked');
})

module.exports = router
