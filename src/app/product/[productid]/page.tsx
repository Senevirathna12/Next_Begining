// export default function ProductDetails(
//     {params}: {params : {productid : string}}
// ){
//     return <h1>product details of product id :{params.productid} </h1>
// }

type ProductDetailsProps = {
    params : {productid:string}
}

export default async function ProductDetails({params}: ProductDetailsProps){
    const {productid} = await params;
    return <h1>product details of product id :{productid}</h1>
}