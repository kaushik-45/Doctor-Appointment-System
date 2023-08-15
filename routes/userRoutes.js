const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  userAppointmentsController,
  bookingAvailabilityController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
//login->post
router.post("/login", loginController);

//register->post
router.post("/register", registerController);

//Auth || Post
router.post("/getUserData", authMiddleware, authController);

//APPLY DOCTOR || Post
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//NOTIFICATION DOCTOR || Post
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

//SEENNOTIFICATION DOCTOR || Post
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//get all doc
router.get('/getAllDoctors',authMiddleware,getAllDoctorsController)


//book-appointmrnt
router.post('/book-appointment',authMiddleware, bookAppointmentController);



//Appointments List
router.get('/user-appointments',authMiddleware,userAppointmentsController)
module.exports = router;
