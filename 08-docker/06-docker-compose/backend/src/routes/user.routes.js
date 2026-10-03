import { Router } from "express";
import { getAllUser, registerUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.get("/users", getAllUser);

export default userRouter;
