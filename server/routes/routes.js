import express from "express";

import { hitAPI } from "../controllers/controller.js";
const router = express.Router();

// specify the endpoints and the functions we want to call
router.get("/", hitAPI);
// router.get("/:id", getLikes);
// router.get("/search/:common_name", searchResults);

// router.post("/", createData);
// router.put("/:id", editData);
// router.patch("/:id", likeCount);
// router.delete("/:id", deleteData);

// export to our server.js file
export default router;
