import React from "react";
import { useGlobalContext } from "../../../context";
import { CartItem } from "./CartItem";

export default function Bag() {
  const { products, total } = useGlobalContext();

  return (
    <section className="flex-1 container mx-auto px-1 flex flex-col justify-center text-center text-slate-900 font-semibold">
      <h2 className="mb-12 uppercase text-5xl font-bold">Your bag</h2>

      <ul>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>

      <div className="mb-8 py-2 flex justify-between text-xl border-t-2 border-black">
        <h3>Total</h3>

        <span>${total.toFixed(2)}</span>
      </div>

      <button className="w-fit mx-auto px-4 py-1 uppercase text-red-500 font-semibold tracking-widest border-2 border-red-500 rounded-md hover:bg-red-500 hover:text-white transition-colors">
        Clear cart
      </button>
    </section>
  );
}
