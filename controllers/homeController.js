const Url = require('../models/url');
const User = require('../models/user');
const shortid = require('shortid');

module.exports.home = async function (req, res) {
  // check if user is signed in
  if (req.isAuthenticated()) {
    const urls = await Url.find({});
    if (urls) {
      return res.render('home', {
      title: 'Home',
      urls: urls,
      });
    }
  return res.redirect('/authentication');
  }
}

// add url to the database
module.exports.addUrl = async (req, res) => {
    try {
        // check if url already exists associated with the user
        const existsUserUrl = await Url.findOne({ url: req.body.url, user: req.user._id });
        if (existsUserUrl) {
            // if url already exists
            console.log('Url already exists');
            req.flash('error', 'Url already exists');
            return res.redirect('back');
        } else { 
            // create a new url
            const url = await Url.create({
                url: req.body.url,
            });
            const createShortid = shortid.generate();
            url.shortUrl = `https://urlshortener-30l7.onrender.com/${createShortid}`;
            url.shortid = createShortid;
            url.user = req.user._id;
            await url.save();
            return res.json(200, {
                message: 'Url created successfully',
                url: url
            })
        }
    } catch (err) {
        console.log('Error in creating url', err);
        return res.redirect('back');
    }
}

// redirect to original url
module.exports.redirect = async (req, res) => {
    try {
        // find a url
        // const url = await Url.findById(req.params.id);
        const url = await Url.findOne({ shortid: req.params.id });
        // if url is not found
        if (!url) {
            return res.status(404).json({
                message: 'url not found'
            });
        }
        // else redirect to the original url
        console.log(url.url);
        return res.redirect(url.url);
    } catch (err) {
        console.log('Error in redirecting', err);
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}