module.exports = function(sequelize, DataTypes) {
    var Flavor = sequelize.define("Flavor", {
        flavor_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        flavor_description: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        flavor_image: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        flavor_creator: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Flavor;
};
