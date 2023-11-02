import { getAllProducts } from "@/actions/products";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Search from "@/sub-components/Search";
import { Product, User } from "@/typescript/interfaces";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await getAllProducts();
  return (
    <main
      className="flex w-full flex-col justify-center items-center gap-8"
      id="home"
    >
      <Hero />

      <section
        id="cards-container"
        className="flex flex-col justify-center items-center min-h-screen md:p-20 gap-10"
      >
        <h3 className="text-gray-800 font-semibold text-4xl tracking-tight dark:text-white text-center">
          Svi modeli satova
        </h3>
        <Search />
        <div className="flex flex-wrap w-full justify-center items-center gap-5">
          {products?.documents?.map((product: Product) => {
            return (
              <ProductCard
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
      </section>
    </main>
  );
}
