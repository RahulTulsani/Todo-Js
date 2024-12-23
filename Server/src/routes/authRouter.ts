import { Router } from "express";
import signup from "../controllers/authController";

const router:Router = Router();

router.post('/signup',signup);

export default router;