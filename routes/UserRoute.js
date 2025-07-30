import express from 'express';
import UserController from '../controller/UserController.js';
import verify from '../Middleware/verifyMiddleware.js';
const router=express.Router();

router.post("/signUp",UserController.handleUserSignUp);
router.post("/login",UserController.handleUserLogin);
router.get('/getDetails',verify,UserController.getDetails)
export default router;