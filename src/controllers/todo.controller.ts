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

    if(!todo.title || !todo.content) {
        return ResponseCreator.generateResponse(
            res,
            400,
            {},
            "Title or Content is missing",
        );
    }

    const {code, message} = await TodoService.AddTodo(todo);

    return ResponseCreator.generateResponse(res, code, {}, message);
}

export default {AddTodo};