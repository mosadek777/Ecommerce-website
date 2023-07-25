export interface Product {
    title:string,
    imageCover:string,
    price:number,
    category:Category,
    ratingsAverage:any,
    id:string,
    description?:string,
    images?:string[]
}


interface Category{
    name:string
}