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
const { valid } = require("joi");


module.exports = {
  addCalculate: async (payloadData, path) => {
    const schema = Joi.object().keys({
        mobile: Joi.number().valid(0,1).optional(),
        web: Joi.number().optional(),
        both: Joi.number().valid(0,1).optional(),
        email: Joi.number().valid(0,1).optional(),
        twoStep: Joi.number().valid(0,1).optional(),
        viaSocial: Joi.number().valid(0,1).optional(),
        NoSignUp: Joi.number().valid(0,1).optional(),
        accrequired: Joi.number().valid(0,1).optional(),
        notrequired: Joi.number().valid(0,1).optional(),
        userFeed: Joi.number().valid(0,1).optional(),
        search: Joi.number().valid(0,1).optional(),
        pushNoti: Joi.number().valid(0,1).optional(),
        messUserMan: Joi.number().valid(0,1).optional(),
        RatingReview: Joi.number().valid(0,1).optional(),
        RewardDeal: Joi.number().valid(0,1).optional(),
        payEcommerce: Joi.number().valid(0,1).optional(),
        categoryFilter: Joi.number().valid(0,1).optional(),
        userGenerated: Joi.number().valid(0,1).optional(),
        Booking: Joi.number().valid(0,1).optional(),
    });
	let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
    console.log("payload data===?",payload)
    
    let objToSave = {};  
    if (_.has(payload, "mobile") && payload.mobile != "") objToSave.mobile = payload.mobile;
    if (_.has(payload, "web") && payload.web != "") objToSave.web = payload.web;
    if (_.has(payload, "both") && payload.both != "") objToSave.both = payload.both;
    if (_.has(payload, "email") && payload.email != "") objToSave.email = payload.email;
    if (_.has(payload, "twoStep") && payload.twoStep != "") objToSave.twoStep = payload.twoStep;
    if (_.has(payload, "viaSocial") && payload.viaSocial != "") objToSave.viaSocial = payload.viaSocial;
    if (_.has(payload, "NoSignUp") && payload.NoSignUp != "") objToSave.NoSignUp = payload.NoSignUp;
    if (_.has(payload, "accrequired") && payload.accrequired != "") objToSave.accrequired = payload.accrequired;
    if (_.has(payload, "notrequired") && payload.notrequired != "") objToSave.notrequired = payload.notrequired;
    if (_.has(payload, "userFeed") && payload.userFeed != "") objToSave.userFeed = payload.userFeed;
    if (_.has(payload, "search") && payload.search != "") objToSave.search = payload.search;
    if (_.has(payload, "pushNoti") && payload.pushNoti != "") objToSave.pushNoti = payload.pushNoti;
    if (_.has(payload, "messUserMan") && payload.messUserMan != "") objToSave.messUserMan = payload.messUserMan;
    if (_.has(payload, "RatingReview") && payload.RatingReview != "") objToSave.RatingReview = payload.RatingReview;
    if (_.has(payload, "RewardDeal") && payload.RewardDeal != "") objToSave.RewardDeal = payload.RewardDeal;
    if (_.has(payload, "payEcommerce") && payload.payEcommerce != "") objToSave.payEcommerce = payload.payEcommerce;
    if (_.has(payload, "categoryFilter") && payload.categoryFilter != "") objToSave.categoryFilter = payload.categoryFilter;
    if (_.has(payload, "userGenerated") && payload.userGenerated != "") objToSave.userGenerated = payload.userGenerated;
    if (_.has(payload, "Booking") && payload.Booking != "") objToSave.Booking = payload.Booking;
    
let addPlateform = await Service.appCalculatorServices.saveData(objToSave);
if (addPlateform) {
  return message.success.ADDED;
} else {
  return Response.error_msg.notAdded;
}
  },

 

  getPlateform :  async(paramData) => {
    let profile = Service.plateformService.getplateformAll();
    if (profile) {
      return profile;
    } else {
      throw Response.error_msg.recordNotFound
    }
  },
};