import express from "express";
import { body } from "express-validator";
import {
  getCaptainProfile,
  loginCaptain,
  logoutCaptain,
  registerCaptain,
} from "../controllers/captain.controller.js";
import { authCaptain } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post(
  "/register",
  [
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be atleast 3 characters"),
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be atleast 3 characters"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("There must be capacity of atleast 1"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be atleast 3 characters"),
    body("vehicle.vehicletype")
      .isIn(["bike", "car", "auto"])
      .withMessage("Invalid vehicle type"),
  ],
  registerCaptain
);
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  loginCaptain
);

router.get("/profile", authCaptain, getCaptainProfile);
router.get("/logout", authCaptain, logoutCaptain);
export default router;
