import { Router } from "express";
import signup from "../controllers/authController";

const router:Router = Router();

router.route('/signup').post(signup);

export default router;