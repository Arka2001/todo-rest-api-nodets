import { Router } from "express";
import TodoController from "../controllers/todo.controller";

const TodoRouter: Router = Router();

TodoRouter.post(
    "/",
    TodoController.AddTodo,
);

TodoRouter.get("/", TodoController.GetAllTodos);

TodoRouter.get("/:id", TodoController.GetTodoByID);

TodoRouter.put("/:id", TodoController.UpdateTodoByID);

export default TodoRouter;