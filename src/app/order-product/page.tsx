'use client';
import '../globals.css';
import { useRouter } from "next/navigation";


export default function OrderProduct() {
  const router = useRouter();
  const handleOrderProduct = () => {
    console.log("order is placed...");
    router.push("/");
  };

  return (
    <>
      <h1>Order Product</h1>
      <button className="m-1 p-1 bg-slate-500 border-2 border-black rounded-md" onClick={handleOrderProduct}>Place Order</button>
    </>
  );
}
