const jwt = require("jsonwebtoken");

//import model

const newUser = require("../models/newUser");

exports.signup = (req, res) => {
  newUser.findOne({ email: req.body.email }).exec((error, user) => {
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
  newUser.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) return res.status(404).json({ error });

    if (user) {
      const isPassword = user.authenticate(req.body.password);
      if (isPassword) {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        const { _id, firstName, lastName, email, fullName } = user;

        res.status(200).json({
          token,
          user: { _id, firstName, lastName, email, fullName },
        });
      } else {
        return res.status(404).send("Invalid Password");
      }
    } else {
      return res.status(404).send("Something went wrong");
    }
  });
};

exports.userSignin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.JWT_SECRET);
  req.user = user;
  next();
};
