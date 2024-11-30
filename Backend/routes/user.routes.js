import express from 'express';
import { body } from 'express-validator';
import { registerUser,loginUser } from '../controllers/user.controller.js';
const router =express.Router();

router.post('/register',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min:3}).withMessage("First name must be atleast 3 letters"),
    body('password').isLength({min:6}).withMessage("Password must be atleast 6 letters")
],
registerUser
)
router.post('/login',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage("Password must be atleast 6 letters")
],
loginUser
)

export default router;