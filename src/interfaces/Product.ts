export interface IProduct {
    id?: number | null,
    name?: string,
    price?: number,
}

export class Product implements IProduct{
    public id: null;
    public name: string;
    public price: number;
    
    constructor(){
        this.id =null;
        this.name = "";
        this.price = 0;
    }
}