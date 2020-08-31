const passport = require("passport");
const express = require("express");
const router = express.Router();
const db = require("./models");
let isAuthenticated = require("./config/middleware/isAuthenticated");

// =============== User routes =============
router.post("/api/register", function (req, res) {
  console.log("registering user");

  //Do password validation here before attempting to register user, such as checking for password length, captial letters, special characters, etc.
  db.User.register(
    new db.User({
      name: req.body.name,
      age: req.body.age,
      username: req.body.username,
      email: req.body.email,
      location: req.body.location,
      gender: req.body.gender,
      artist: req.body.artist,
      canvas: req.body.canvas
    }),
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      passport.authenticate("local")(req, res, function (data) {
        res.json(req.user);
      });
    }
  );
});

router.post("/api/login", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json(info);
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.json(user);
    });
  })(req, res, next);
});

router.get("/api/logout", function (req, res) {
  req.logout();
  res.json({ message: "logged out" });
});

router.get("/api/user", function (req, res) {
  console.log("available username");
  if (req.query.username) {
    db.User.find({ username: req.query.username })
      .then(result => {
        res.json({ length: result.length });
      })
      .catch(err => res.status(422).json(err));
  } else {
    res.json({ message: "no username entered for query" });
  }
});

router.get("/api/users", function (req, res) {
  db.User.find({})
    .then(result => {
      res.json(result)
    })
    .catch(err =>  console.log(err));
})

router.get("/api/authorized", isAuthenticated, function (req, res) {
  res.json(req.user);
});

// =============== Post routes =============
router.post("/api/post", function (req, res) {
  db.Post.create({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      author: req.body.author,
      type: req.body.type,
      user: req.body.user
    }
  ).then(dbPost => {
    db.User.findOneAndUpdate({}, { $push: { posts: dbPost._id } }, { new: true })
      .then(link => {
        console.log("user updated server side")
        res.json(dbPost)
        res.json(link)
      })
      .catch(err => err)
  })
  .catch(({ message }) => {
    // console.log(message);
    res.json(message);
  });
});

router.get("/api/post", (req, res) => {
    db.Post.find({})
      .then(post => {
        res.json(post)
      })
      .catch(err => console.log(err))
})

module.exports = router;
