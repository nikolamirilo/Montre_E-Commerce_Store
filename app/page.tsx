import { getAllProducts } from "@/actions/products";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { Product, User } from "@/typescript/interfaces";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await getAllProducts();
  return (
    <main
      className="flex w-full flex-col justify-center items-center"
      id="home"
    >
      <Hero />
      <section
        id="cards-container"
        className="flex flex-wrap w-fit justify-center items-center min-h-screen"
      >
        {products?.documents?.map((product: Product) => {
          return (
            <Card
              key={product._id}
              _id={product._id}
              username={product.author.full_name}
              user_image={product.author.image}
              location={product.location}
              title={product.title}
              description={product.description}
              images={product.images}
              price={product.price}
            />
          );
        })}
      </section>
    </main>
  );
}
