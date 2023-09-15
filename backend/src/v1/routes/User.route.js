import express from "express";
import { meetController, userController } from "../controllers";
import authMiddleware from "../middlewares/Auth.middleware";

const router = express.Router();

router.get("/user-details", authMiddleware, userController.userDetails);
router.post("/book-meeting", authMiddleware, meetController.bookMeeting);
router.get("/get-meetings", authMiddleware, meetController.getMeetings);
router.get("/my-meetings", authMiddleware, meetController.showbookedMeetings);
export default router;
