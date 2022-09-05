import { TodoDto } from "../interfaces/todo.interface";
import { Types } from "mongoose";
import { Request, Response } from "express";
import * as TodoService from "../services/todo.service";
import ResponseCreator from "../utils/responseCreator";

const AddTodo = async (req: Request, res: Response) => {
    const todo: TodoDto = {
        title: req.body.title,
        content: req.body.content,
    };

    if (!todo.title || !todo.content) {
        return ResponseCreator.generateResponse(
            res,
            400,
            {},
            "Title or Content is missing",
        );
    }

    const { code, message } = await TodoService.AddTodo(todo);

    return ResponseCreator.generateResponse(res, code, {}, message);
}

const GetAllTodos = async (req: Request, res: Response) => {
    const limit: number = Number(req.query['limit'] || 10);
    const offset: number = Number(req.query['offset'] || 0);

    const { code, todos, message } = await TodoService.GetAllTodos(limit, offset);

    return ResponseCreator.generateResponse(res, code, todos, message);
}

const GetTodoByID = async (req: Request, res: Response) => {
    let id: Types.ObjectId;

    try {
        id = new Types.ObjectId(req.params.id);
    } catch (error) {
        return ResponseCreator.generateResponse(res, 404, {}, "Todo Not Found");
    }

    const {code, todo, message} = await TodoService.GetTodoByID(id);

    return ResponseCreator.generateResponse(res, code, todo, message);
}

export default { AddTodo, GetAllTodos ,GetTodoByID };