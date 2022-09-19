

// export type  Product = {
//     name: string
//     id:number
//     img:string
//     description:string
//     price:number
//     category?:string
//     date?:string
// }

export type  Product = {
    _id:string
    id:number
    name: string, 
    plantFamily:string,
    category:Array<string>,
    description:string,
    img:string,
    imageAlt:string,
    price:number,
    size:Array<string>,
    placemantArea:string,
    airPurifying:boolean,
    childPetFriendly:boolean,
    light:Array<string>,
    inStock:boolean, 
    date?:string

}