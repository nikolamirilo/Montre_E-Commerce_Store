import Card from "@/components/Card";
import { base_url } from "@/constants";
import { Post } from "@/typescript/interfaces";

export const revalidate = 0;
export const dynamic = "force-dynamic";

async function getProducts() {
  try {
    const res = await fetch(`${process.env.MONGO_DB_URL!}/action/find`, {
      cache: "no-cache",
      method: "POST",
      headers: {
        "api-key": process.env.MONGO_DB_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dataSource: "MainCluster",
        database: "Store",
        collection: "products",
      }),
    });

    if (!res.ok) {
      console.log(res);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function Home() {
  const products = await getProducts();
  console.log(products);
  return (
    <main
      className="flex w-full flex-col justify-center items-center py-20 min-h-screen"
      id="home"
    >
      <section
        id="cards-container"
        className="flex flex-wrap w-fit justify-center items-center"
      >
        {/* {posts?.map((post: Post) => {
          return (
            <Card
              key={post._id}
              _id={post._id}
              username={post.username}
              location={post.location}
              title={post.title}
              description={post.description}
              image={post.image}
              likes={post.likes}
            />
          );
        })} */}
      </section>
    </main>
  );
}
