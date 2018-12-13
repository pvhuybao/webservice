export enum UserStatus {
    Normal = 0,
    Vip1,
    Vip2,
    Vip3,
    Vip4,
    Vip5,
    Vip6,
    Vip7,
    Vip8,
    Vip9,
    Vip10,
    Admin
}

export class UserModel {
    id: number;
    code: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    phone: string;
    vip: number;
    point: number;

    constructor() {}
}