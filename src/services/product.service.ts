import { api, headerAPI } from "../configs/axios";
import { IProduct } from "../interfaces/Product";

export class ProductService{
    private apiURL = "v1/products";

    public async getAll(){
        try{
            const response = await api.get<IProduct[]>('${this.apiURL}')
            return await response.data
        }catch(error){
            console.log(error)
            throw error;
        }
    }

    public async post(data: IProduct){
        try{
            const response =  await api.post<IProduct>('${this.apiURL}', data, headerAPI)
            return await response.data
        }catch(error){
            console.log(error)
            throw error;
        }
    }

    public async getById(id: number){
        try{
            const response =  await api.get<IProduct>('${this.apiURL}/${id}', headerAPI)
            const data: IProduct = response.data;
            return data
        }catch(error){
            console.log(error)
            throw error;
        }
    }

    public async put(data: IProduct){
        try{
            const response =  await api.put<IProduct>('${this.apiURL}/${data.id}', data, headerAPI)
            return await response.data;
        }catch(error){
            console.log(error)
            throw error;
        }
    }

    public async delete(data: IProduct){
        try{
            const response =  await api.delete<IProduct>('${this.apiURL}/${data.id}', headerAPI)
            return await response.data;
        }catch(error){
            console.log(error)
            throw error;
        }
    }
}