import React from "react";
import Card from "./Card";
import { Product } from "@/typescript/interfaces";
import { getAllProducts } from "@/actions/products";

export const revalidate = 0;
export const dynamic = "force-dynamic";

const Products = async () => {
  const products = await getAllProducts();
  return (
    <div className="flex flex-wrap w-full justify-center items-center gap-5">
      {products?.documents?.map((product: Product) => {
        return (
          <Card
            key={product._id}
            _id={product._id}
            title={product.title}
            category="Lux"
            images={product.images}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default Products;
