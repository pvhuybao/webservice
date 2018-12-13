export class ProductModel {
    id: number;
    code: string;
    name: string;
    description: string;
    detail: string;
    idCategory: number;
    price: number;
    quantity: number;
    image: string = "https://static.umotive.com/img/product_image_thumbnail_placeholder.png";
    discount: number;
    salePrice: number;

    constructor() {}
}