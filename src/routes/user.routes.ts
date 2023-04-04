import { Router } from "express";

const userRouter : Router = Router();

// Register a User

userRouter.post(
    '/register'
);

// Login a User

userRouter.post(
    '/login'
);

// Fetch the Profile of a User

userRouter.get(
    '/profile/:userId'
);

export default userRouter;