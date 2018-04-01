$("#submit-btn").on("click", function() {
    var name_input = $("#flavor-name-input").val().trim();
    var description_input = $("#flavor-description-input").val().trim();
    var image_input = $("#flavor-image-input").val().trim();
    var creator = "Carl"; //eventually will check current user's name and use that

    var newFlavor = {
        flavor_name: name_input,
        flavor_description: description_input,
        flavor_image: image_input,
        flavor_creator: creator
    };

    $("#flavor-name-input").val("");
    $("#flavor-description-input").val("");
    $("#flavor-image-input").val("");

    $.post("/flavors/create", newFlavor, function(req, res) {});
});