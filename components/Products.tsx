import React from "react";
import { Product } from "@/typescript/interfaces";
import { getAllProducts } from "@/actions/server/products";
import Search from "./Search";
import Loader from "./Loader";
import Card from "./Card";

export const revalidate = 0;
export const dynamic = "force-dynamic";

const Products = async () => {
  const products = await getAllProducts();
  if (!products) return <Loader />;
  return (
    <section
      id="cards-container"
      className="flex flex-col justify-center items-center h-fit md:p-20 gap-10 w-full"
    >
      <h3 className="text-gray-800 font-semibold text-4xl tracking-tight text-center uppercase">
        Svi modeli satova
      </h3>
      <Search />
      <div className="flex flex-wrap w-full justify-center items-center gap-5">
        {products?.map((product: Product, idx: number) => {
          if (
            product.title &&
            product.images.length > 0 &&
            product.price &&
            product.category &&
            product.isPublic == true
          ) {
            return (
              <Card
                key={idx}
                _id={product?._id?.toString()}
                title={product.title}
                category={product.category}
                images={product.images}
                price={product.price}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default Products;
