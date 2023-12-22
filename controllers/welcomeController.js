module.exports.welcome = function (req, res) {
    res.render("welcome", {
      title: "URL Shortener",
      isAdmin: req.session.isAdmin || false,
    });
  };
  