module.exports.home = function (req, res) {
  res.render("home", {
    title: "Home",
    isAdmin: req.session.isAdmin || false,
  });
};