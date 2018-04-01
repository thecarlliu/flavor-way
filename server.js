var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Retrieve models
var db = require("./models");

var app = express();

//Serves public as a static directory
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

//Sets handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/flavors_controller");
app.use(routes);
app.use("/update", routes);
app.use("/create", routes);


//Listen on port 3000
var PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
    db.Flavor.create({
        flavor_name: "Test Flavor",
        flavor_description: "Test Description",
        flavor_image: "https://via.placeholder.com/40x40/",
        flavor_creator: "Carl"
    });
});
