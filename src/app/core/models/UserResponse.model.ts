
export class UserResponseModel{

    constructor(public id: number, public userName: string, public email: string,
        public roles: string[]){}
}