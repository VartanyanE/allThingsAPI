import mongoose from "mongoose";
import allThingsModel from "../models/model.js";
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
    title: "Seed that shit",
    message: "Guess it worked",
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
