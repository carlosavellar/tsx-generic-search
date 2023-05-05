interface IFooBar{
    type: string
    bar: string
}

const fooBar: Array<IFooBar> = [
    { type: "Loi", bar: 'Zil' },
    { type: "Soi", bar: 'Cil' },
    { type: "Hoi", bar: 'Dil' },
    { type: "Woi", bar: 'Jl' }
]


const sortByFoo =(data: Array<IFooBar>)=>{
    return data.sort((a, b)=>{
        if(a['type'] > b['type']){
            return 1
        }else if(a['type'] < b['type']){
            return -1
        }else{
            return 0
        }
    })
}

const genericSort = <T extends IFooBar> (data: Array<T>, key: keyof T)=>{
    return                                                           data.sort((a, b)                                                                                                             =>{
        if(a[key] > b[key]){
            return 1
        }else if(a[key] < b[key]){
            return -1
        }else{
            return 0
        }
    }) 
}                                                                                                               


export const sortedByFoo = sortByFoo(fooBar);
export const sortedByBar = genericSort(fooBar, 'bar');