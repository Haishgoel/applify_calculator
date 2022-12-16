const _ = require("underscore");
const moment = require("moment");
const Service = require("../services");
const message = require("../config/messages");
let Response = require("../config/response");
const Joi = require("joi");
let config = require("../config/env")();
let commonHelper = require("../Helper/common");
let NotificationManager = require("../Helper/mailer");
let TokenManager = require("../Helper/adminTokenManager");
const path = require("path");
const profileProjection = ["mobile", "email", "Image", "Name","phoneNumber","dateOfBirth","Gender"];
const Sequelize = require("sequelize");


module.exports = {
    addCategory: async (payloadData, path) => {
    const schema = Joi.object().keys({
        email: Joi.string().optional(),
        name: Joi.string().optional(),
        category: Joi.string().optional(),
    });
	let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
    console.log("payload data===?",payload)
    
    let objToSave = {};  
    if (_.has(payload, "email") && payload.email != "") objToSave.email = payload.email;
    if (_.has(payload, "name") && payload.name != "") objToSave.name = payload.name;
    if (_.has(payload, "category") && payload.category != "") objToSave.category = payload.category;
    
    
let addCategory = await Service.addcategoryServices.saveData(objToSave);
if (addCategory) {
  return message.success.ADDED;
} else {
  return Response.error_msg.notAdded;
}
  },
};