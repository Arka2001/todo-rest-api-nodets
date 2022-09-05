import { TodoDto } from "../interfaces/todo.interface";
import Todo from "../models/todo.model";
import { Types } from "mongoose";

const AddTodo = async (todo: TodoDto) => {
    try {
        // Creating a new Todo
        const newTodo = new Todo({
            title: todo.title,
            content: todo.content,
        });

        await newTodo.save();

        return { code: 201, message: "Success" };

    } catch (error) {
        return { code: 500, message: "Internal Server Error" };
    }
};

export { AddTodo };