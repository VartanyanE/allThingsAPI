import mongoose from "mongoose";

// we build our schema
const allThingsSchema = mongoose.Schema({
  title: "String",
  message: "String",
  // likeCount: {
  //   type: Number,
  //   default: 0,
  // },
  // selectedFile: "String",
  // createdAt: {
  //   type: Date,
  //   default: new Date(),
  // },
});
// turn our schema into a model
const allThingsModel = mongoose.model("Main", allThingsSchema);
// export our model to our controller
export default allThingsModel;
