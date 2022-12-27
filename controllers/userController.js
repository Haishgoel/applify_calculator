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
const profileProjection = ["mobile", "email", "Image", "Name", "phoneNumber", "dateOfBirth", "Gender"];
const Sequelize = require("sequelize");


module.exports = {
    addUser: async (payloadData, path) => {
        const schema = Joi.object().keys({
            osapp: Joi.string().optional(),
            industry: Joi.string().optional(),
            platform: Joi.string().optional(),
            logintype: Joi.string().optional(),
            profile: Joi.string().optional(),
            email: Joi.string().optional(),
            name: Joi.string().optional(),
            'feature[]': Joi.array().items(Joi.string()).optional(),

        });
        let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
        console.log("payload data===?", payload)

        let objToSave = {};
        if (_.has(payload, "osapp") && payload.osapp != "") objToSave.osapp = payload.osapp;
        if (_.has(payload, "industry") && payload.industry != "") objToSave.industry = payload.industry;
        if (_.has(payload, "platform") && payload.platform != "") objToSave.platform = payload.platform;
        if (_.has(payload, "logintype") && payload.logintype != "") objToSave.logintype = payload.logintype;
        if (_.has(payload, "profile") && payload.profile != "") objToSave.profile = payload.profile;
        if (_.has(payload, "email") && payload.email != "") objToSave.email = payload.email;
        if (_.has(payload, "name") && payload.name != "") objToSave.name = payload.name;


        let addUser = await Service.userServices.saveData(objToSave);
        let condition={
            email:payload.email
        } 
        console.log("this is id",addUser.id)
        
        let newFeature=[]
        if (addUser) {
        if (_.has(payload, "feature[]") && payload['feature[]'].length>0) {
            // for(let i in payload['feature[]']) {
            //     let featureNameObject = {
            //         userId: addUser.id,
            //         featureName: payload['feature[i]']
            //     };
            //     await Service.featureServices.createFeature(featureNameObject);
            // }
            
            payload["feature[]"].forEach((feature) => {
                newFeature.push({
                  userId: addUser.id,
                  featureName: feature,
                });  
              });
               await Service.featureServices.createFeature(newFeature);
            }
                
        } else {
            return Response.error_msg.notAdded;
        }
    },
};