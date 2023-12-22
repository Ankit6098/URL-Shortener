const User = require("../models/user");
const bcrypt = require("bcrypt");
const signupMailer = require("../mailers/signup_mailer");

module.exports.signinsignout = async function (req, res) {
  try {
    if (req.isAuthenticated()) {
      return res.redirect("/home");
    }
    return res.render("authentication", {
      title: "Sign In | Sign Up",
    });
  } catch (err) {
    console.log("Error", err);
    return;
  }
};

// create session
module.exports.createSession = async function (req, res) {
  console.log("create session");
  if (req.user) {
    req.flash("success", "Successfully logged In");
    console.log("logged in successfully");
  } else {
    req.flash("error", "Invalid Username/Password");
    console.log("Invalid Email/password");
  }

  return res.redirect("/home");
};

// destroy session
module.exports.destroySession = function (req, res) {
  req.logout(function (error) {
    req.session.destroy();
    if (error) {
      req.flash("error", "Something went wrong!");
      return;
    }
  });
  req.flash("success", "Successfully logged out");
  return res.redirect("/");
};

// create user
module.exports.create = async function (req, res) {
  // check if password and confirm_password are same
  if (req.body.password != req.body.confirmPassword) {
    console.log("password and confirm_password are not same");
    req.flash("error", "Password and Confirm Password are not same");
    return res.redirect("back");
  }

  // check if user already exists
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    const plaintextPassword = req.body.password;
    const saltRounds = 10;

    // Generate a hash of the password
    bcrypt.hash(plaintextPassword, saltRounds, async (err, hash) => {
      if (err) {
        console.error(err);
        req.flash("error", "Error Creating User");
        return res.status(500).send("Error creating user");
      }

      try {
        const newUser = await User.create({
          ...req.body,
          password: hash, // Store the hashed password in the database
        });
        console.log("New user created!");
        req.flash("success", "New User Created");
        signupMailer.signupWelcome(newUser);
        return res.redirect("back");
      } catch (err) {
        console.error(err);
        req.flash("error", "Error Creating User");
        return res.status(500).send("Error creating user");
      }
    });
  } else {
    console.log("User already exists!");
    req.flash("info", "User already exists!");
    return res.redirect("/authentication");
  }
};
