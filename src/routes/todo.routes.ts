import { Router } from "express";
import TodoController from "../controllers/todo.controller";

const TodoRouter: Router = Router();

TodoRouter.post(
    "/",
    TodoController.AddTodo,
);

export default TodoRouter;