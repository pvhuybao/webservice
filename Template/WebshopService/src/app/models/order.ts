import { OrderDetailModel } from './orderDetail';

export enum OrderStatus {
    New = 1,
    Done,
    Delivery
}

export class OrderModel {
    id: number;
    code: string;
    email: string;
    userId: number;
    address: string;
    date: string;
    total: number;
    status: number;
    orderDetails: Array<OrderDetailModel>;

    constructor() {}
}