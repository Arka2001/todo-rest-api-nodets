import User from "../models/user.model";
import { createUserDto, userSchemaDto } from "../dtos/user.dtos";

const _createUser = async (userDetails: createUserDto): Promise<userSchemaDto> => User.create({ ...userDetails });

const _fetchUserByEmail = async (email: string): Promise<userSchemaDto | null> => User.findOne({ email });

export {
    _createUser,
    _fetchUserByEmail,
}