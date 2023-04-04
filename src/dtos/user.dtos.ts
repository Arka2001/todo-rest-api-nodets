import mongoose from "mongoose";

interface userSchemaDto extends mongoose.Document {
    name: string;
    email: string;
    password: string;
}

interface createUserDto {
    name: string;
    email: string;
    password: string;
}

interface loginUserDto {
    email: string;
    password: string;
}

export {
    userSchemaDto,
    createUserDto,
    loginUserDto,
}