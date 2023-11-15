import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
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
      <DynamicProducts />
    </main>
  );
}
