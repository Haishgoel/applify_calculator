let appConstants = require("../config/appConstants")
module.exports = function (Sequelize, sequelize, DataTypes) {
	return sequelize.define("user", {
		...require("./core")(Sequelize, DataTypes),
		osapp: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		industry: {
			type: DataTypes.STRING(150),
			defaultValue: null,
		},
		platform: {
			type: DataTypes.STRING(150),
			defaultValue: null,
		},
        logintype: {
			type: DataTypes.STRING(150),
			defaultValue: null,
		},
        profile: {
			type: DataTypes.STRING(150),
			defaultValue: null,
		},
        email: {
			type: DataTypes.STRING(150),
			defaultValue: null,
		},
        name: {
			type: DataTypes.STRING(150),
			defaultValue: null,
		},
	}, {
		tableName: "user",
		timestamps: true,
		paranoid: true,
		deletedAt: 'destroyTime'
	});
};