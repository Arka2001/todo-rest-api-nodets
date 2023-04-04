import { TodoDto, TodoInterface } from "../dtos/todo.dtos";
import Todo from "../models/todo.model";
import mongoose, { Types } from "mongoose";

const _createTodo = async (todo: TodoDto): Promise<TodoInterface> => Todo.create({ ...todo });

const GetAllTodos = async (createdBy: string, limit: number, offset: number): Promise<TodoInterface[] | null> => await Todo.find({ createdBy: new mongoose.Types.ObjectId(createdBy) }).limit(limit).skip(limit * (offset - 1));

const GetTodoByID = async (_id: Types.ObjectId) => {
    try {
        const todo = await Todo.findOne({ _id });

        if (todo) return { code: 200, todo, message: "Success" };
        else return { code: 404, todo, message: "Todo Not Found" };
    } catch (error) {
        return { code: 500, todo: {}, message: "Internal Server Error" };
    }
}

const UpdateTodoByID = async (_id: Types.ObjectId, title?: string, content?: string) => {
    try {
        const currentTodo = await Todo.findOne({ _id });

        if (currentTodo) {
            const result = await Todo.updateOne(
                { _id },
                {
                    $set: {
                        title: title === null ? currentTodo.title : title,
                        content: content === null ? currentTodo.content : content,
                    }
                },
                { upsert: true }
            );

            if (!result) return { code: 400, todo: {}, message: "Bad Request" };
            return { code: 200, todo: {}, message: "Updated Successfully" };
        } else {
            return { code: 404, currentTodo, message: "Todo Not Found" };
        }
    } catch (error) {
        return { code: 500, todo: {}, message: "Internal Server Error" };
    }
}

const DeleteTodo = async (_id: Types.ObjectId) => {
    try {
        const todo = await Todo.findOne({ _id });
        if (todo) {
            const result = await Todo.deleteOne({ _id }, { upsert: true });
            if (!result) return { code: 400, todo: {}, message: "Bad Request" };
            return { code: 200, todo: {}, message: "Deleted Successfully" };
        } else {
            return { code: 404, todo: {}, message: "Todo Not Found" };
        }

    } catch (error) {
        return { code: 500, todo: {}, message: "Internal Server Error" };
    }
}

export { _createTodo, GetAllTodos, GetTodoByID, UpdateTodoByID, DeleteTodo };