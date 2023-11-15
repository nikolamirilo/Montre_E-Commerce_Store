import React from "react";
import Card from "./Card";
import { Product } from "@/typescript/interfaces";
import { getAllProducts } from "@/actions/server/products";

export const revalidate = 0;
export const dynamic = "force-dynamic";

const Products = async () => {
  const products = await getAllProducts();
  return (
    <div className="flex flex-wrap w-full justify-center items-center gap-5">
      {products?.map((product: Product) => {
        if (
          product.title &&
          product.images.length > 0 &&
          product.price &&
          product.category &&
          product.isPublic == true
        ) {
          return (
            <Card
              key={product?.id}
              _id={product?.id}
              title={product.title}
              category={product.category}
              images={product.images}
              price={product.price}
            />
          );
        }
      })}
    </div>
  );
};

export default Products;
