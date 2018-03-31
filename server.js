var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Retrieve models
var db = require("./models");

var app = express();

//Serves public as a static directory
app.use("/public", express.static(path.join(__dirname, "public")));

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
});
