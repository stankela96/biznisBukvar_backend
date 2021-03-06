import "babel-polyfill";
import express from "express";
import mongooose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import example from "./routes/formRouter";
const dotenv = require("dotenv").config();

const app = express();
app.use(bodyParser.json());
const corsOptions = {
  origin : '*'
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/", example);

mongooose
  .connect("mongodb://localhost:27017/biznisBukvar", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("app is online");
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log("ERROR");
    process.exit();
  });
