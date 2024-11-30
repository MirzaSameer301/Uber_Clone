import { createCaptain } from "../services/captain.service.js";
import captainModel from "../models/captain.model.js";
import { validationResult } from "express-validator";
import blackListTokenModel from "../models/blacklistToken.Model.js";

export const registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const isCaptainAlreadyExist = await captainModel.findOne({ email });

  if (isCaptainAlreadyExist) {
    return res.status(400).json({ message: "Captain already exist" });
  }

  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email: email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicletype: vehicle.vehicletype,
  });

  const token = captain.generateAuthToken();

  return res.status(201).json({ captain, token });
};

export const loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const captain = await captainModel.findOne({ email }).select("+password");

  if (!captain) {
    return res.status(400).json({ message: "Invalid Email or Password" });
  }

  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid Email or Password" });
  }

  const token = captain.generateAuthToken();
  res.cookie('token', token);
  res.status(200).json({ captain, token });
};
export const getCaptainProfile = async (req, res, next) => {
  res.status(200).json({ captain: req.captain });
};
export const logoutCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  await blackListTokenModel.create({ token });

  res.clearCookie("token");

  res.status(200).json({ message: "Logout successfully" });
};
