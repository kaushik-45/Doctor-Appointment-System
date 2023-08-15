const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorCtrl");
const router = express.Router();

//post single doc info
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//post update profile
router.post("/updateProfile", authMiddleware, updateProfileController);

//post get single doc info
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

//get appointments
router.get('/doctor-appointments',authMiddleware,doctorAppointmentsController);

//post update status
router.post('/update-status',authMiddleware,updateStatusController);

module.exports = router;
