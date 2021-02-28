import mongoose from "mongoose";
import allThingsModel from "../models/model.js";
import dotenv from "dotenv";
dotenv.config();
// This file empties the Books collection and inserts the books below.

mongoose.connect(
  "mongodb+srv://MainDude:lakers323@cluster0.fxwhf.mongodb.net/Main?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

const seedData = [
  new allThingsModel({
    language: "js",
    dataType: "array",
    start: "const",
    middle: " = [",
    end: "]",
  }),
  new allThingsModel({
    language: "js",
    dataType: "object",
    start: "const",
    middle: " = {",
    end: "}",
  }),
  new allThingsModel({
    language: "js",
    dataType: "arrowFunction",
    start: "const",
    middle: " = (",
    end: ") => {}",
  }),
  new allThingsModel({
    language: "js",
    dataType: "arrowFunction ASYNC AWAIT",
    start: "const",
    middle: " = async (",
    end: ") => {/* await */}",
  }),
  new allThingsModel({
    language: "html",
    dataType: "divWithClass",
    start: `<div classname="`,
    middle: `"></div>`,
    end: "",
  }),
  new allThingsModel({
    language: "html",
    dataType: "divWithId",
    start: `<div id="`,
    middle: `"></div>`,
    end: "",
  }),
  new allThingsModel({
    language: "html",
    dataType: "linkStylesheet",
    start: `<link href="`,
    middle: `" rel="stylesheet"`,
    end: `type="text/css" />`,
  }),
  new allThingsModel({
    language: "js",
    dataType: "forLoop",
    start: "for(i = 0; i <",
    middle: ".length; i++)",
    end: "{}",
  }),
  new allThingsModel({
    language: "js",
    dataType: "mathRandomFloor",
    start: "Math.floor(Math.random() * ",
    middle: ")",
    end: "",
  }),
  new allThingsModel({
    language: "js",
    dataType: "forEach",
    start: "",
    middle: ".forEach((item)=> {})",
    end: "",
  }),
  new allThingsModel({
    language: "js",
    dataType: "ifElse",
    start: "if(condition)",
    middle: "{}",
    end: "else {}",
  }),
  new allThingsModel({
    language: "js",
    dataType: "setTimeout",
    start: "setTimeout(function(){  },",
    middle: ")",
    end: "",
  }),
  new allThingsModel({
    language: "react",
    dataType: "useEffect",
    start: "useEffect(() => {}, [])",
    middle: "",
    end: "",
  }),
  new allThingsModel({
    language: "js",
    dataType: "consoleLog",
    start: "console.log(`%c  ${",
    middle: "}`, ",
    end: ")",
  }),
];
var done = 0;
for (var i = 0; i < seedData.length; i++) {
  seedData[i].save(function (err, result) {
    done++;
    if (done === seedData.length) {
      exit();
    }
  });
}
function exit() {
  mongoose.disconnect();
}
