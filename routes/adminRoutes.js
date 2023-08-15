const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");
//Get Method
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//get method
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//update status
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);
module.exports = router;
