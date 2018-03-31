var express = require("express");

var router = express.Router();
var db = require("../models");

//Sends user to main page where flavors are displayed
//Retrieves all flavors from db and renders to index.handlebars
router.get("/", function(req, res) {
    res.redirect("/flavors");
});
router.get("/flavors", function(req, res) {
    db.Flavor.findAll({
        order: [
            ["flavor_name", "ASC"]
        ]
    }).then(function(dbFlavor) {
        var hbsObject = {
            flavor: dbFlavor
        };
        return res.render("index", hbsObject);
    });
});

//Tells router what to do with an incoming post request from the /flavors/create route
router.post("/flavors/create", function(req, res) {
    db.Flavor.create({
        flavor_name: req.body.flavor_name,
        flavor_description: req.body.flavor_description,
        flavor_image: req.body.flavor_image,
        flavor_creator: req.body.flavor_creator,
    }).then(function(dbFlavor) {
        //Refreshes the page, in order to load new flavor
        res.redirect("/");
    });
});

//Updates a flavor
router.put("/flavors/update", function(req, res) {
    db.Flavor.update({
        flavor_name: req.body.flavor_name,
        flavor_description: req.body.flavor_description,
        flavor_image: req.body.flavor_image,
        flavor_creator: req.body.flavor_creator
    }, {
        where: {
            id: req.body.flavor_id
        }
    }).then(function(dbFlavor) {
        //Sends json back
        res.json("/");
    });
});

//Updates a flavor to favorite or not favorite
router.put("/flavors/update", function(req, res) {
    db.Flavor.update({
        flavor_favorite: true
    }, {
        where: {
            id: req.body.flavor_id
        }
    }).then(function(dbFlavor) {
        //Sends json back
        res.json("/");
    });
});

module.exports = router;
