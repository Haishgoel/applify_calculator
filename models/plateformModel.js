let appConstants = require("../config/appConstants")
module.exports = function (Sequelize, sequelize, DataTypes) {
	return sequelize.define("plateform", {
		...require("./core")(Sequelize, DataTypes),
		web: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
        mobile:{
            type: DataTypes.INTEGER,
			allowNull: false
        },
        both:{
            type: DataTypes.INTEGER,
			allowNull: false
        },
        email:{
            type: DataTypes.INTEGER,
			allowNull: false
        },
        twoStep:{
            type: DataTypes.INTEGER,
			allowNull: false
        },
        viaSocial:{
            type: DataTypes.INTEGER,
			allowNull: false
        },
        NoSignUp:{
            type: DataTypes.INTEGER,
			defaultValue:0
        },
        accrequired:{
            type: DataTypes.INTEGER,
			allowNull: false
        },
        notrequired:{
            type: DataTypes.INTEGER,
		    defaultValue:0
        },
        userFeed:{
            type: DataTypes.INTEGER,
			allowNull: false
        },
        search:{
            type: DataTypes.INTEGER,
			allowNull: false
        },
        pushNoti:{
            type: DataTypes.INTEGER,
			allowNull: false
        },
        messUserMan:{
            type: DataTypes.INTEGER,
			allowNull: false
        },
        RatingReview:{
            type: DataTypes.INTEGER,
			allowNull: false
        },
        RewardDeal:{
            type: DataTypes.INTEGER,
			allowNull: false
        },
        payEcommerce:{
            type: DataTypes.INTEGER,
			allowNull: false
        },
        categoryFilter:{
            type: DataTypes.INTEGER,
			allowNull: false
        },
        userGenerated:{
            type: DataTypes.INTEGER,
			allowNull: false
        },
        Booking:{
            type: DataTypes.INTEGER,
			allowNull: false
        }
	}, {
		tableName: "plateform",
		timestamps: true,
		paranoid: true,
		deletedAt: 'destroyTime'
	});
};