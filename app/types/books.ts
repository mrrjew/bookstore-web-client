import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Books=  {
    _id:string,
    title:string,
    author:string,
    image:string | StaticImport,
    description:string,
    price:number,
    category:string,
    countInStock:number,
    rating:number,
    numReviews:number,
    isNew:boolean,
    pages:number,
    language:string,
  }