var express = require("express");
var router = express.Router();

const fetch = require("node-fetch");
const User = require("../models/users");

router.post("/signup",
  (req, res) => {
    if (!(req.body.email || req.body.password)) {
      res.json({ result: false, error: "Missing or empty fields" });
    } else {
        User.findOne({ email: { $regex: new RegExp(req.body.email, 'i') } }).then(dbData => {
            if (dbData === null) {

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      // Finally save in database
      newUser.save().then((newDoc) => {
        res.json({ result: true, user: newDoc });
      });
    } else {
        res.json({result: false, error: 'User already saved'})
    }})}})
 
