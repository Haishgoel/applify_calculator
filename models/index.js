var Sequelize = require("sequelize");
var sequelize = require("../dbConnection").sequelize;
module.exports = {
  profile: require("./user")(Sequelize, sequelize, Sequelize.DataTypes),
  plateform: require("./plateformModel")(Sequelize, sequelize, Sequelize.DataTypes),
  addcategory: require("./addcategory")(Sequelize, sequelize, Sequelize.DataTypes),
  appCalculate: require("./appCalculator")(Sequelize, sequelize, Sequelize.DataTypes)

};