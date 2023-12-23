"use server"
import { storeDatabaseConnection } from "@/mongodb/connections";
import { currentUser } from "@clerk/nextjs";
import { ObjectId } from "mongodb";
import { getSingleProduct } from "./products";
import { getSingleUser } from "./users";


export async function addItemToCart(uid: string | undefined, newCartItem: string | undefined) {
  try {
    const db = await storeDatabaseConnection();
    const user = await db.collection("users").findOne({ uid: uid });
    const product = await getSingleProduct(newCartItem!)
    // Check if the item already exists in the cart
    if (user && user.cart.some((item:any) => item._id.equals(new ObjectId(newCartItem)))) {
      console.log("Item already exists in the cart.");
      return "Duplicate";
    }
    const cartProduct = {...product, quantity: 1}
    await db.collection("users").updateOne(
      { uid: uid },
      {
        $push: {
          cart: cartProduct
        },
      },
      {
        upsert: true,
      }
    );
    return "Success";
  } catch (error) {
    console.log((error as Error).message);
    return "Error"
  }
}
export async function getTotalData(uid: string | undefined) {
  try {
    const user = await currentUser();
    const userId = user?.id;
    let total = 0;
    if (userId) {
      const mongoUser = await getSingleUser(userId);

      if (mongoUser.cart.length > 0) {
        for (const item of mongoUser.cart) {
          const product = await getSingleProduct(item._id);
          if (product) {
            total += (product.isOnDiscount ? product.discountedPrice : product.price)*item.quantity;
          }
        }
      }
      return total;
    }
  } catch (error) {
    console.error((error as Error).message);
  }
}
export async function deleteCartItem(uid: string | undefined, itemToDelete: string | undefined) {
  try {
    const db = await storeDatabaseConnection();
    await db.collection("users").updateOne(
      { uid: uid },
      {
        $pull: {
          'cart': { '_id': new ObjectId(itemToDelete) }
        },
      }
    );
    return true;
  } catch (error) {
    console.error((error as Error).message);
    return false;
  }
}

export async function updateItemCount(uid: string | undefined, modelId: string | undefined, count: number) {
  try {
    const db = await storeDatabaseConnection();
    await db.collection("users").updateOne(
      { uid: uid, "cart._id": new ObjectId(modelId) },
      {
        $set: {
          "cart.$.quantity": count,
        },
      }
    );

    return true;
  } catch (error) {
    console.log((error as Error).message);
    return false;
  }
}