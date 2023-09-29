export const searchFilter = <T>(object: T, properties: Array<keyof T>, query: string, isDifferentCase: boolean): boolean =>{
    if(!query) return true
    return properties.some((property)=>{
        const value = object[property]
        if(typeof value === 'string' || typeof value === 'number') {
            if(isDifferentCase){
                return value.toString().toLowerCase().includes(value.toString().toLowerCase());
            }else{
                return value.toString().includes(value.toString());
            }
        }
    });
}


