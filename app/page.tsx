import Hero from "@/components/Hero"

export default async function Home() {
  return (
    <main className="flex w-full flex-col justify-center items-center" id="home">
      <Hero />
      {/* <UserButton afterSignOutUrl="/" /> */}
    </main>
  )
}
