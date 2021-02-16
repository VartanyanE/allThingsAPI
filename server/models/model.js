import mongoose from "mongoose";

// we build our schema
const allThingsSchema = mongoose.Schema({
  language: "String",
  dataType: "String",
  start: "String",
  middle: "String",
  end: "String",
});
// turn our schema into a model
const allThingsModel = mongoose.model("Main", allThingsSchema);
// export our model to our controller
export default allThingsModel;
