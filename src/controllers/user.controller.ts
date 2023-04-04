import { Request, Response } from "express";
import { createUserDto, loginUserDto } from "../dtos/user.dtos";
import * as userServices from "../services/user.service";
import { GenerateResponse } from "../utils/responseCreator";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

const Register = async (req: Request, res: Response) => {
    try {
        const userDetails: createUserDto = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const existingUser = await userServices._fetchUserByEmail(req.body.email);

        if (existingUser) return GenerateResponse(res, 400, {}, "This email is already registered");

        await userServices._createUser(userDetails);

        return GenerateResponse(res, 201);

    } catch (error: any) {
        if (process.env.NODE_ENV === 'development') console.log(error);
        if (error.name === "ValidationError" || error.name === "CastError" || error.name === "BSONTypeError") return GenerateResponse(res, 400, {}, "One or more inputs are invalid");
        return GenerateResponse(res, 500);
    }
}

const Login = async (req: Request, res: Response) => {
    try {
        const userDetails: loginUserDto = {
            email: req.body.email,
            password: req.body.password,
        }

        const userPresent = await userServices._fetchUserByEmail(req.body.email);

        if (!userPresent) return GenerateResponse(res, 404);

        const isMatched = await bcrypt.compare(userDetails.password, String(userPresent.password));

        if (!isMatched) return GenerateResponse(res, 401);

        const payload = {
            user: {
                id: userPresent.id
            }
        };

        const authToken = jwt.sign(payload, String(process.env.JWT_SECRET), { expiresIn: process.env.JWT_EXPIRY });

        const refToken = jwt.sign(payload, String(process.env.REF_SECRET), { expiresIn: process.env.REF_EXPIRY });

        return GenerateResponse(res, 200, { authToken, refToken })

    } catch (error: any) {
        if (process.env.NODE_ENV === 'development') console.log(error);
        if (error.name === "ValidationError" || error.name === "CastError" || error.name === "BSONTypeError") return GenerateResponse(res, 400, {}, "One or more inputs are invalid");
        return GenerateResponse(res, 500);
    }
}

export {
    Register,
    Login,
}