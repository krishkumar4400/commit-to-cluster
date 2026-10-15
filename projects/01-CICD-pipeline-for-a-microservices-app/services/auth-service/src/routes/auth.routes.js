import { Router } from "express";

const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.post("/logout", logoutUser);
authRouter.post("/user", getCurrentUser);

export default authRouter;
