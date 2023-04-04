import { Model, model, Schema } from "mongoose";
import { TodoInterface } from "../dtos/todo.dtos";

const TodoSchema: Schema<TodoInterface> = new Schema(
    {
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        }
    }, {
        timestamps: true,
    }
);

const Todo: Model<TodoInterface> = model("Todo", TodoSchema);

export default Todo;