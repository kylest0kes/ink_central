const passport = require("passport");
const express = require("express");
const path = require("path");
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

router.get("/api/user/:username", function (req, res) {
  db.User.find({ username: req.params.username})
    .then(result => {
      console.log("get user by username called!")
      console.log(req.params.username)
      res.json(result)
    });
});

router.get("/api/users", function (req, res) {
  db.User.find({})
    .then(result => {
      res.json(result)
    })
    .catch(err =>  console.log(err));
});

// For displaying profile pages when user != authorised user
router.get("/api/profile/:id", function (req, res) {
  db.User.find({_id: req.params.id})
    .then(result => {
      res.json(result)
    })
    .catch(err => console.log(err))
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
    db.User.findOneAndUpdate({_id: req.body.author}, { $push: { posts: dbPost._id } }, { new: true })
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
      .sort({ date: -1 })
      .then(post => {
        res.json(post)
      })
      .catch(err => console.log(err))
});

router.get("/api/post/:id", (req, res) => {
  db.Post.find({ _id: req.params.id })
  .sort({ date: -1 })
  .then(post => {
    res.json(post)
  })
  .catch(err => console.log(err))
});

router.delete("/api/post/:id", (req, res) => {
  // sends multiple tasks to database then sends response == comments below show the long way
  Promise.all([
    db.User.findOneAndUpdate({ posts: req.params.id }, { $pull: { posts: req.params.id } }), 
    db.Post.deleteOne({ _id: req.params.id })
  ])
  // db.User.findOneAndUpdate({ posts: req.params.id }, { $pull: { posts: req.params.id } })
  //   .then(() => db.Post.deleteOne({ _id: req.params.id }))
    .then(result => {
      console.log(result)
      res.json(result)
    })
    .catch(err => console.log(err))
});

router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
