export interface ICategory {
    id?: number | null,
    name?: string,
}

export class Category implements ICategory{
    public id: null;
    public name: string;
    
    constructor(){
        this.id =null;
        this.name = "";
    }
}