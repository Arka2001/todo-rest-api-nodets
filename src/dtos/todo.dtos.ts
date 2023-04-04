import mongoose, { Schema } from "mongoose";

interface TodoInterface extends mongoose.Document {
    createdBy: Schema.Types.ObjectId;
    title: string;
    content: string;
}

interface TodoDto {
    createdBy: Schema.Types.ObjectId;
    title: string;
    content: string;
}

export {TodoInterface, TodoDto};