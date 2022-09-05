import { Model, model, Schema } from "mongoose";
import { TodoInterface } from "../interfaces/todo.interface";

const TodoSchema: Schema<TodoInterface> = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        }
    }
);

const Todo: Model<TodoInterface> = model("Todo", TodoSchema);

export default Todo;