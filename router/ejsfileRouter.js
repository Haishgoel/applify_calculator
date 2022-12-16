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
  

router.get("/categoryPage1",(req,res)=>{
    res.render("categoryPage1",{base:base})
  })
 
  
router.get("/categoryPage2",(req,res)=>{
    res.render("categoryPage2",{base:base})
  })
  

router.get("/plateform",async(req,res)=>{
  let data=await plateformController.getPlateform()
    res.render("plateform",{
      base:base,
      data:data,
    })
  })

  module.exports = router;