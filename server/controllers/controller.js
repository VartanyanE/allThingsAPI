import allThingsModel from "../models/model.js";

// we create and export our functions to the routes file

// get request
export const hitAPI = async (req, res) => {
  try {
    //run .find() on our model
    const dataPayload = await allThingsModel.find();
    // return status and send our payload in the response
    res.status(200).json(dataPayload);
  } catch (error) {
    console.log(error);
  }
};

// export const getLikes = async (req, res) => {
//   try {
//     //run .find() on our model
//     const likesPayload = await crudModel.findById({
//       _id: req.params.id,
//     });
//     // return status and send our payload in the response
//     res.status(200).json(likesPayload);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const searchResults = async (req, res) => {
  try {
    //run .find() on our model
    const searchPayload = await allThingsModel.find({
      dataType: req.params.data_type,
    });
    // return status and send our payload in the response
    res.status(200).json(searchPayload);
    console.log(searchPayload);
  } catch (error) {
    console.log(error);
  }
};
// // post request
export const populateOurAPI = async (req, res) => {
  // our data from the frontend
  const newData = req.body;
  // create a new document on our model
  const newDoc = new allThingsModel(newData);

  try {
    // run .save() on our model
    await newDoc.save();
    // return status and send our payload in the response
    res.status(200).json(newDoc);
  } catch (error) {
    console.log(error);
  }
};

// export const uploadImage = async (req, res) => {
//   // our data from the frontend
//   const frontEnd = req.body;
//   // create a new document on our model
//   const newDoc = new crudModel(frontEnd);

//   try {
//     // run .save() on our model
//     await newDoc.save();
//     // return status and send our payload in the response
//     res.status(200).json(newDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const editData = async (req, res) => {
//   try {
//     const ourModel = await crudModel.findOneAndUpdate(
//       { _id: req.params.id },
//       req.body
//     );
//     console.log(req.params.id);
//     res.status(200).json(ourModel);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const likeCount = async (req, res) => {
//   try {
//     const ourModel = await crudModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $inc: {
//           likeCount: 1,
//         },
//       },
//       {
//         new: true,
//       }
//     );
//     res.status(200).json(ourModel);
//     console.log(ourModel);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteData = async (req, res) => {
//   try {
//     const ourModel = await crudModel.findOneAndDelete({ _id: req.params.id });
//     console.log(req.params.id);
//     res.status(200).json(ourModel);
//   } catch (error) {
//     console.log(error);
//   }
// };
