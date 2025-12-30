import { UserRepository } from "../../repositories/user.repository";
import bcryptjs from "bcryptjs"
import { CreateUserDTO } from "../../dtos/user.dto";
import { HttpError } from "../../errors/http-error";
let userRepository = new UserRepository();
export class AdminUserService {
    async createUser(data: CreateUserDTO){
        // same as src/services/user.service.ts
    }
    async getAllUsers(){
        const users = await userRepository.getAllUsers();
        // transformation or filtering logic can be added here
        return users;
    }
    async getOneUser(id: string){
        const user = await userRepository.getUserById(id);
        if(!user){
            throw new HttpError(404, "User not found");
        }
        return user;
    }
    // continue all
}