var express = require("express");
var router = express.Router();
const sendResponse = require("../Helper/sendResponse");
let base = "http://localhost:3001";
const plateformController = require("../controllers/plateformController");
const categoryController = require("../controllers/categoryController");
const { category } = require("../models");


// router.get("/", async (req, res) => {
//   var id = JSON.parse(JSON.stringify(req.query))
//   console.log("id========>",id)
//   // let data=await plateformController.getPlateform()
//   let data= await categoryController.getCate(id.id)
//   let data1 = data.map(x=>x.dataValues.typeId)
//   let v = data1.forEach(element => console.log("element---?",element));

//  console.log("this is data1[0]",data1[0]) 
//  console.log("this is data1[1]",data1[1])

//   console.log("v data values==",data1)
//   // if (id.id == 1) {
//     // res.render("applify", {
//     //   data: data,pe
//     //   base: base,
//     //   imgs: "/public/images/app1.png",
//     //   order: 5,
//     //   imgId: data.id
//     // }) 
//     data1[0] == "1" ? 
//   // } else if (id.id ==2) {
//     res.render("applify", {
//       data: data,
//       base: base,
//       imgs: "/public/images/cate2.png",
//       order: 5,
//       imgId: data.id
//     }) :
//   // } else {
//     res.render("applify", {
//       data: data,
//       base: base,
//       imgs: "/public/images/app1.png",
//       order: 7,
//       imgId: data.id
//     })
//   // }
//   // let data=await plateformController.getPlateform()
//   //   res.render("applify", {
//   //     data:data,
//   //     base: base,
//   //     order: 6,
//   //     imgs: "/public/images/app1.png",
//   //     imgId: 4
//   //   });
// });


router.get("/", async (req, res) => {
  let data= await categoryController.getCate(1)
  data = await JSON.parse(JSON.stringify(data));
 
  let data1= await categoryController.getCate(2)
  data1 = await JSON.parse(JSON.stringify(data1));
  // console.log("data==>value",data.map(x=>x.typeId))

    res.render("applify", {
      data: data,
      data1: data1,
      base: base,
      imgs: "/public/images/app1.png",
      // order: 5,
      imgId: data.id
    }) 

});

router.get("/get", async (req, res) => {
  var id = JSON.parse(JSON.stringify(req.query))
  console.log("id-========", id.id)
  let data = await categoryController.getAllCategory(id.id)
  console.log("data params====>", data)
  res.render("applify", {
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
  res.render("addcatergory", { base: base });
});

router.get("/addbusiness", (req, res) => {
  res.render("addbusiness", { base: base });
});



router.get("/category", (req, res) => {
  res.render("category", { base: base })
})


router.get("/business", (req, res) => {
  res.render("business", { base: base })
})


router.get("/plateform", async (req, res) => {
  let data = await plateformController.getPlateform()
  res.render("plateform", {
    base: base,
    data: data,
  })
})

module.exports = router;