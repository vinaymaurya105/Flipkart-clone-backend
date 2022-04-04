//import model
const newUser = require("../models/newUser");

exports.signup = (req, res) => {
  newUser.findOne({ email: req.body }).exec((error, user) => {
    if (user)
      return res.status(404).json({
        message: "User already registred",
      });
  });

  const { firstName, lastName, email, password } = req.body;

  const _user = new newUser({
    firstName,
    lastName,
    email,
    password,
    userName: Math.random().toString(),
  });

  _user.save((error, data) => {
    if (error) {
      return res.status(404).json({
        message: "Something wents wrong",
      });
    } else if (data) {
      return res.status(201).json({
        message: "user registerd successfully",
      });
    }
  });
};

exports.signin = (req, res) => {
  newUser.find({ email: req.body.email }).exec((error, user) => {
    if (error) return res.status(404).json({ error });

    if (user) {
    } else {
      return res.status(404).send("Something went wrong");
    }
  });
};
