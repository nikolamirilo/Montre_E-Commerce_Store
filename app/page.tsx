import Hero from "@/components/Hero"
import Snow from "@/components/Snow"

export default async function Home() {
  return (
    <main className="flex w-full flex-col justify-center items-center" id="home">
      <Hero />
      <Snow />
    </main>
  )
}
