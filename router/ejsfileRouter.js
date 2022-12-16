var express = require("express");
var router = express.Router();
const sendResponse = require("../Helper/sendResponse");
let base = "http://localhost:3002";
const plateformController=require("../controllers/plateformController")


router.get("/", async(req, res) => {
  let data=await plateformController.getPlateform()
    res.render("applify", {
      data:data,
      base: base,
    });
  });
  

router.get("/addcatergory", (req, res) => {
    res.render("addcatergory",{base:base});
  });

router.get("/addbusiness", (req, res) => {
    res.render("addbusiness",{base:base});
  });
  
  

router.get("/category",(req,res)=>{
    res.render("category",{base:base})
  })
 
  
router.get("/business",(req,res)=>{
    res.render("business",{base:base})
  })
  

router.get("/plateform",async(req,res)=>{
  let data=await plateformController.getPlateform()
    res.render("plateform",{
      base:base,
      data:data,
    })
  })

  module.exports = router;