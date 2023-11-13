"use server"
export async function getAllProducts() {
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
  export async function getSingleProduct(id:string){
  }
  export async function isPublicUpdate (id:string) {
  }
  export async function updateProduct(id:string){
  }
  export async function deleteProduct(id:string){
  }
