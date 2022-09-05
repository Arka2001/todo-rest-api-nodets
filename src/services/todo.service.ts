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

const GetAllTodos = async (limit: number, offset: number) => {
    try {
        const todos = await Todo.find().limit(limit).skip(limit * offset);

        return { code: 200, todos, message: "Success" };
    } catch (error) {
        return { code: 500, todos: [], message: "Internal Server Error" };
    }
}

const GetTodoByID = async (_id: Types.ObjectId) => {
    try {
        const todo = await Todo.findOne({ _id });

        if (todo) return { code: 200, todo, message: "Success" };
        else return { code: 404, todo, message: "Todo Not Found" };
    } catch (error) {
        return { code: 500, todo: {}, message: "Internal Server Error" };
    }
}

export { AddTodo, GetAllTodos, GetTodoByID };