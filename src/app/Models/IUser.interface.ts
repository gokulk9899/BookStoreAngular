export interface IUser{
    userName:string;
    email:string;
    password:string;
}

export interface ILoginUser{
    userName:string;
    password:string;
}

export interface IResponseUser{
    userName:string;
    token:string;
}