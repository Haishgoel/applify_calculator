var express = require("express");
var router = express.Router();
const sendResponse = require("../Helper/sendResponse");
const categoryController=require("../controllers/categoryController")


router.post("/add", (req, res) => {
  console.log("hello one")
  let payload = req.body;
  return sendResponse.executeMethod(categoryController.addCateg, payload, req, res);
});



router.get("/get", (req, res) => {
    let payload = req.body;
    return sendResponse.executeMethod(categoryController.getAllCategory, payload, req, res);
  });

  router.get("/get/:typeId", (req, res) => {
    let payload = req.params;
    return sendResponse.executeMethod(categoryController.getCategory, payload, req, res);
  });


module.exports = router;
