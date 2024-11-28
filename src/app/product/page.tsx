import Link from "next/link"

export default function Product(){
    const productID = 200;
    return (
        <>
            <Link href='/'>Home</Link>
            <h1>Product List</h1>
            <h2><Link href='/product/1'>Product 01</Link></h2>
            <h2><Link href='/product/2'>Product 02</Link></h2>
            <h2><Link href='/product/3'>Product 03</Link></h2>
            <h2><Link href={`/product/${productID}`}>Product {productID}</Link></h2>
            
        </>
    )
}