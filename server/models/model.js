import mongoose from "mongoose";

// we build our schema
const allThingsSchema = mongoose.Schema({
  dataType: "String",
  syntaxStart: "String",
  syntaxEnd: "String",
});
// turn our schema into a model
const allThingsModel = mongoose.model("Main", allThingsSchema);
// export our model to our controller
export default allThingsModel;
