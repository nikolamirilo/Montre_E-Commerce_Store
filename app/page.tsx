import Hero from "@/components/Hero";

export default async function Home() {
  return (
    <main
      className="flex w-full flex-col justify-center items-center gap-20"
      id="home"
    >
      <Hero />
    </main>
  );
}
