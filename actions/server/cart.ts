"use server"
import { storeDatabaseConnection } from "@/mongodb/connections";
import { currentUser } from "@clerk/nextjs";
import { getSingleProduct } from "./products";
import { getSingleUser } from "./users";


export async function addItemToCart(uid: string | undefined, newCartItem: string | undefined) {
  try {
    const db = await storeDatabaseConnection();
    const user = await db.collection("users").findOne({ uid: uid });

    if (user && user.cart.includes(newCartItem)) {
      console.log("Item already exists in the cart.");
      return "Duplicate";
    }
    await db.collection("users").updateOne(
      { uid: uid },
      {
        $push: {
          cart: newCartItem
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


export async function deleteCartItem (uid: string | undefined, itemToDelete: string | undefined) {
    try {
        const db = await storeDatabaseConnection()
        await db.collection("users").updateOne(
          { uid: uid },
          {
            $pull: {
                cart: itemToDelete
            },
          }
        )
        return true
      } catch (error) {
        console.log((error as Error).message)
        return false
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
        for (const itemId of mongoUser.cart) {
          const product = await getSingleProduct(itemId);
          if (product) {
            total += product.isOnDiscount ? product.discountedPrice : product.price;
          }
        }
      }
      return total;
    }
  } catch (error) {
    console.error((error as Error).message);
  }
}