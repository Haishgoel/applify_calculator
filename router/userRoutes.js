var express = require("express");
var router = express.Router();
const sendResponse = require("../Helper/sendResponse");
const userController=require("../controllers/userController")




router.post("/add", (req, res) => {
  let payload = req.body;
  return sendResponse.executeMethod(userController.addUser, payload, req, res);
});
module.exports = router;
