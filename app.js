require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const swaggerUI = require("swagger-ui-express");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use("/public", express.static("public"));



const swaggerJsDocs = require("./config/documentation/swagger-admin.json");
app.use("/swagger-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));
var ejsfileRouter=require("./router/ejsfileRouter")
var plateformRouter=require("./router/plateformRouter")
var addcategoryRouter = require("./router/addcategoryRoutes")
var appCalculatorRouter = require("./router/appCalculatorRoutes")
var categoryRouter = require("./router/categoryRoutes")


app.use("/", ejsfileRouter)
app.use("/plateform", plateformRouter)
app.use("/addcategory", addcategoryRouter)
app.use("/appcalculator", appCalculatorRouter)
app.use("/category", categoryRouter)

   

require("./dbConnection").connectDB(); 

require("./models/index");

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
    