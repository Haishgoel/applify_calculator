module.exports = function (Sequelize, sequelize, DataTypes) {
	return sequelize.define(
		"feature",
		{
			...require("./core")(Sequelize, DataTypes),
			userId: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: "user", // name of Target model
					key: "id", // key in Target model that we"re referencing
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},   
		    featureName: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
		
		},
		{
			tableName: "feature"
		});
};