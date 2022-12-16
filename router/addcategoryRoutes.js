var express = require("express");
var router = express.Router();
const sendResponse = require("../Helper/sendResponse");
const addcategoryController=require("../controllers/addcategoryController")


router.post("/add", (req, res) => {
  let payload = req.body;
  return sendResponse.executeMethod(addcategoryController.addCategory, payload, req, res);
});

module.exports = router;
