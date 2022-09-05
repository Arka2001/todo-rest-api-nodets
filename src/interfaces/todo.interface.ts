import mongoose from "mongoose";

interface TodoInterface extends mongoose.Document {
    title: string;
    content: string;
}

interface TodoDto {
    title: string;
    content: string;
}

export {TodoInterface, TodoDto};