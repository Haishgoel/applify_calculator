var express = require("express");
var router = express.Router();
const sendResponse = require("../Helper/sendResponse");
const appCalculatorController=require("../controllers/appCalculatorController")


router.post("/add", (req, res) => {
  let payload = req.body;
  console.log("Dsdfgvhb")
  return sendResponse.executeMethod(appCalculatorController.addCalculate, payload, req, res);
}); 

module.exports = router;
