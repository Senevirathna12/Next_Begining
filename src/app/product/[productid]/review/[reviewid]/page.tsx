import { notFound } from "next/navigation";

type ReviewDetailsProps = {
    params : {
        productid : string,
        reviewid :string
    }
}

export default async function ReviewDetails({params}:ReviewDetailsProps){
    const {reviewid,productid } = await params;
    //if review id grater than or equal to 100 call the notFound function then user can see not-found page
    if(parseInt(reviewid) >= 1000){
        notFound();
    }
    return <h1>review {reviewid} of product {productid}</h1>
}
