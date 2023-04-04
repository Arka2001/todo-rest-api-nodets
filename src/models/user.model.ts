import { Model, model, Schema } from "mongoose";
import { userSchemaDto } from "../dtos/user.dtos";
import { genSaltSync, hashSync } from "bcrypt";

const userSchema : Schema<userSchemaDto> = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.pre('save', async function (next) {
    if(!this.isModified || !this.isNew) {
        next();
    } else this.isModified('password');

    if(this.isModified("password") && this.password) {
        const salt = genSaltSync(12);
        this.password = hashSync(this.password, salt)
    }
});

const User : Model<userSchemaDto> = model('User', userSchema);

export default User;