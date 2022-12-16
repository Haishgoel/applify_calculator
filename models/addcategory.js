let appConstants = require("../config/appConstants")
module.exports = function (Sequelize, sequelize, DataTypes) {
	return sequelize.define("addcategory", {
		...require("./core")(Sequelize, DataTypes),
		email: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(150),
			defaultValue: null,
		},
		category: {
			type: DataTypes.STRING(150),
			defaultValue: null,
		},
	}, {
		tableName: "addcategory",
		timestamps: true,
		paranoid: true,
		deletedAt: 'destroyTime'
	});
};