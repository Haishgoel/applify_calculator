const _ = require("underscore");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Models = require("../models");
const Response = require("../config/response");
const baseService = require("./base");


exports.createFeature = async (objToSave) => {
	return await baseService.saveDataa(Models.feature, objToSave);
	
};
exports.updateData = async (criteria, objToSave) => {
	console.log("obj to save=====>", objToSave)
	return await baseService.updateData(Models.plateform, criteria, objToSave);
};
