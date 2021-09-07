import { UserResponseModel } from "./UserResponse.model";

export class JwtDtoModel{

    constructor(public jwt: string, public user: UserResponseModel){}
}