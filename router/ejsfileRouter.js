var express = require("express");
var router = express.Router();
const sendResponse = require("../Helper/sendResponse");
let base = "http://localhost:3001";
const plateformController=require("../controllers/plateformController");
const categoryController = require("../controllers/categoryController");


router.get("/", async(req, res) => {
  let data=await plateformController.getPlateform()
  console.log("order data values====>", data)
  res.render("applify",{
    data: data,
    base: base,
    imgs: "/public/images/app1.png",
    order:5,
    imgId: data.id
  })
  // let data=await plateformController.getPlateform()
  //   res.render("applify", {
  //     data:data,
  //     base: base,
  //     order: 6,
  //     imgs: "/public/images/app1.png",
  //     imgId: 4
  //   });
  });

  router.get("/get", async(req, res) => {
    var id=JSON.parse(JSON.stringify(req.query)  ) 
    console.log("id-========",id.id)  
    let data = await categoryController.getAllCategory(id.id)
    console.log("data params====>",data)
    res.render("applify",{
      counts: data.count,
      data: data.rows,
      base: base,
      order: categoryName,
      imgs: "/public/images/app1.png",
      imgId: data.id
    })
    // let data=await plateformController.getPlateform()
    //   res.render("applify", {
    //     data:data,
    //     base: base,
    //     order: 6,
    //     imgs: "/public/images/app1.png",
    //     imgId: 4
    //   });
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