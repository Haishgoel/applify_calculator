let appConstants = require("../config/appConstants")
module.exports = function (Sequelize, sequelize, DataTypes) {
	return sequelize.define("appCalculate", {
		...require("./core")(Sequelize, DataTypes),
        image: {
            type: DataTypes.STRING(),
            defaultValue: false,
            field: "image"
        },
        web:{
            type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue :0
        },
        mobile:{
            type: DataTypes.TINYINT(1),
			defaultValue: 0,
			field: "mobile"
        },
        both:{
            type: DataTypes.TINYINT(1),
			defaultValue: 0,
			field: "both"
        },
        email:{
            type: DataTypes.TINYINT(1),
			defaultValue: 0,
			field: "email"
        },
        twoStep:{
            type: DataTypes.TINYINT(1),
			defaultValue: 0,
			field: "twoStep"
        },
        viaSocial:{
            type: DataTypes.TINYINT(1),
			defaultValue: 0,
			field: "viaSocial"
        },
        NoSignUp:{
            type: DataTypes.TINYINT(1),
			defaultValue: 0,
			field: "NoSignUp"
        },
        accrequired:{
            type: DataTypes.TINYINT(1),
			defaultValue: 0,
			field: "accrequired"
        },
        notrequired:{
            type: DataTypes.TINYINT(1),
			defaultValue: 0,
			field: "notrequired"
        },
        userFeed:{
            type: DataTypes.TINYINT(1),
			defaultValue: 0,
			field: "userFeed"
        },
        search:{
            type: DataTypes.TINYINT(1),
			defaultValue: 0,
			field: "search"
        },
        pushNoti:{
            type: DataTypes.TINYINT(1),
			defaultValue: 0,
			field: "pushNoti"
        },
        messUserMan:{
            type: DataTypes.TINYINT(1),
			defaultValue: 0,
			field: "messUserMan"
        },
        RatingReview:{
            type: DataTypes.TINYINT(1),
			defaultValue: 0,
			field: "RatingReview"
        },
        RewardDeal:{
            type: DataTypes.TINYINT(1),
			defaultValue: 0,
			field: "RewardDeal"
        },
        payEcommerce:{
            type: DataTypes.TINYINT(1),
			defaultValue: 0,
			field: "payEcommerce"
        },
        categoryFilter:{
            type: DataTypes.TINYINT(1),
			defaultValue: 0,
			field: "categoryFilter"
        },
        userGenerated:{
            type: DataTypes.TINYINT(1),
			defaultValue: 0,
			field: "userGenerated"
        },
        Booking:{
            type: DataTypes.TINYINT(1),
			defaultValue: 0,
			field: "Booking"
        },
       
	}, {
		tableName: "appCalculate",
		timestamps: true,
		paranoid: true,
		deletedAt: 'destroyTime'
	});
};