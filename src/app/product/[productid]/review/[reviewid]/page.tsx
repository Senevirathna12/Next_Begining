type ReviewDetailsProps = {
    params : {
        productid : string,
        reviewid :string
    }
}

export default async function ReviewDetails({params}:ReviewDetailsProps){
    const {reviewid,productid } = await params;
    return <h1>review {reviewid} of product {productid}</h1>
}
