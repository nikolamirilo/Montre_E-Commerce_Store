import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Search from "@/components/Search";
import dynamic from "next/dynamic";

const DynamicProducts = dynamic(() => import("@/components/Products"), {
  loading: () => <Loader />,
});

export default async function Home() {
  return (
    <main
      className="flex w-full flex-col justify-center items-center gap-20"
      id="home"
    >
      <Hero />
      <section
        id="cards-container"
        className="flex flex-col justify-center items-center min-h-screen md:p-20 gap-10"
      >
        <h3 className="text-gray-800 font-semibold text-4xl tracking-tight  text-center uppercase">
          Svi modeli satova
        </h3>
        <Search />
        <DynamicProducts />
      </section>
    </main>
  );
}
