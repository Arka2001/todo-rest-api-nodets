import { TodoDto } from "../dtos/todo.dtos";
import { Types } from "mongoose";
import { Request, Response } from "express";
import * as TodoService from "../services/todo.service";
import { GenerateResponse } from "../utils/responseCreator";

const CreateTodo = async (req: Request, res: Response) => {
    try {
        const todoData: TodoDto = {
            title: req.body.title,
            content: req.body.content,
            createdBy: req.body.user._id,
        }

        await TodoService._createTodo(todoData);

        return GenerateResponse(res, 201);

    } catch (error: any) {
        if (process.env.NODE_ENV === 'development') console.log(error);
        if (error.name === "ValidationError" || error.name === "CastError" || error.name === "BSONTypeError") return GenerateResponse(res, 400, {}, "One or more inputs are invalid");
        return GenerateResponse(res, 500);
    }
}

const GetAllTodos = async (req: Request, res: Response) => {
    try {
        const limit = Number(req.query['limit'] || 10);
        const page = Number(req.query['page'] || 1);
        const userId = req.body.user.id;

        const todos = await TodoService.GetAllTodos(userId, limit, page);

        return GenerateResponse(res, 200, todos);

    } catch (error: any) {
        if (process.env.NODE_ENV === 'development') console.log(error);
        if (error.name === "ValidationError" || error.name === "CastError" || error.name === "BSONTypeError") return GenerateResponse(res, 400, {}, "One or more inputs are invalid");
        return GenerateResponse(res, 500);
    }
}

const GetTodoByID = async (req: Request, res: Response) => {
    let id: Types.ObjectId;

    try {
        id = new Types.ObjectId(req.params.id);
    } catch (error) {
        return GenerateResponse(res, 404, {}, "Todo Not Found");
    }

    const { code, todo, message } = await TodoService.GetTodoByID(id);

    return GenerateResponse(res, code, todo, message);
}

const UpdateTodoByID = async (req: Request, res: Response) => {
    let id: Types.ObjectId;

    const title: string = req.body.title;
    const content: string = req.body.content;

    try {
        id = new Types.ObjectId(req.params.id);
    } catch (error) {
        return GenerateResponse(res, 404, {}, "Todo Not Found");
    }

    const { code, message } = await TodoService.UpdateTodoByID(id, title, content);

    return GenerateResponse(res, code, message);

}

const DeleteTodo = async (req: Request, res: Response) => {
    let id: Types.ObjectId;

    try {
        id = new Types.ObjectId(req.params.id);
    } catch (error) {
        return GenerateResponse(res, 404, {}, "Todo Not Found");
    }

    const { code, message } = await TodoService.DeleteTodo(id);

    return GenerateResponse(res, code, message);
}

export default { CreateTodo, GetAllTodos, GetTodoByID, UpdateTodoByID, DeleteTodo };