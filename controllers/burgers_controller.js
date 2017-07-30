// Required depedencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
var bodyParser = require('body-parser');


// Create routes
router.use(bodyParser.urlencoded({extended: true}));

// index redirects to /burgers
router.get("/", function(req, res) {
  res.redirect("/burgers");
});


// start page
router.get("/burgers", function(req, res) {
    burger.all(function(data) {
   
    var hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});



// create 
router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function(error) {
    if (error) {
      console.log("There was an error in the create post method");
    }
       res.redirect("/");
  });
});



// update
router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect("/");
  });
});


// Export
module.exports = router;