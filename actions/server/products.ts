"use server"
import { storeDatabaseConnection } from "@/connections/mongodb/connections";
import { Product } from "@/typescript/interfaces";
import { ObjectId } from "mongodb";

export const getAllProducts = async () => {
  try {
    const db = await storeDatabaseConnection();
    const allProducts: any = await db.collection("products").find({}).toArray();
    return allProducts;
  } catch (error) {
    console.log((error as Error).message);
  }
};

// export const deleteAllproducts = async () => {
//   try {
//     const db = await storeDatabaseConnection();
//     db.collection("products").deleteMany({});
//   } catch (error) {
//     console.log((error as Error).message);
//   }
// };
// Create Product
export const createProduct = async (product: object) => {
  try {
    const db = await storeDatabaseConnection();
    await db.collection("products").insertOne(product);
  } catch (error) {
    console.log((error as Error).message);
  }
};
// export const updateproduct = async (_id: string, likes:number) => {
//   try {
//     const db = await storeDatabaseConnection();
//     await db.collection("products").updateOne(
//       { _id: new ObjectId(_id) },
//       {
//         $set: {
//           likes: likes,
//         },
//       }
//     );
//     return true;
//   } catch (error) {
//     console.log((error as Error).message);
//     return false;
//   }
// };
export const getSingleProduct= async (_id: any) => {
  try {
    const allproducts = await getAllProducts();
    const singleproduct: Product = allproducts?.find(
      (singleproduct: Product) => singleproduct.id.toString() == _id
    );
    return singleproduct;
  } catch (error) {
    console.log((error as Error).message);
  }
};
// export const deleteSingleproduct = async (_id: any) => {
//   try {
//     const db = await storeDatabaseConnection();
//     const objId = new ObjectId(_id)
//     await db.collection("products").deleteOne({_id: objId});
//   } catch (error) {
//     console.log((error as Error).message);
//   }

// export async function getAllProducts() {
//     try {
//       const res = await fetch(`${process.env.MONGO_DB_URL!}/action/find`, {
//         cache: "no-cache",
//         method: "product",
//         headers: {
//           "api-key": process.env.MONGO_DB_API_KEY!,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           dataSource: "MainCluster",
//           database: "Store",
//           collection: "products",
//         }),
//       });
//       if (!res.ok) {
//         console.log(res);
//       }
//       return res.json();
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       throw error;
//     }
//   }
//   export async function getSingleProduct(id:string){
//     const products = await getAllProducts()
//     const singleProduct = products?.documents?.find((product: Product)=> product._id == id)
//     return singleProduct
//   }
//   export async function isPublicUpdate (id:string, isPublic: boolean) {
//     try {
//       const res = await fetch(`${process.env.MONGO_DB_URL!}/action/updateOne`, {
//         method: "product",
//         headers: {
//           "api-key": process.env.MONGO_DB_API_KEY!,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           dataSource: "MainCluster",
//           database: "Store",
//           collection: "products",
//           filter: { id: id },
//           update: { $set: { isPublic: isPublic  } }

//         }),
//       });
//       if (!res.ok) {
//         console.log(res);
//       }
//       return res.json();
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       throw error;
//     }
//   }
//   export async function updateProduct(id:string){
//   }
//   export async function deleteAllProducts(){
//         try {
//       const res = await fetch(`${process.env.MONGO_DB_URL!}/action/deleteMany`, {
//         method: "product",
//         headers: {
//           "api-key": process.env.MONGO_DB_API_KEY!,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           dataSource: "MainCluster",
//           database: "Store",
//           collection: "products",
//           filter: {}
//         }),
//       });
//       if (!res.ok) {
//         console.log(res);
//       }
//       return res.json();
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       throw error;
//     }
//   }
