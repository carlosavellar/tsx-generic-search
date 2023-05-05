import { type } from "os";

export const genericFilter =<T> (object: T, properties: Array<keyof T>,query: string, isUpperCase: boolean ) =>{
    if(query === ''){
        return true;
    }

    return properties.some((property)=>{
        const value = object[property];
        if(typeof value === 'string' || typeof value === 'number'){
            return value.toString().includes(query);
        }else if(typeof value === 'string' || typeof value === 'number' && isUpperCase){
            return value.toString().toUpperCase().includes(query.toUpperCase());
        }
    })

}