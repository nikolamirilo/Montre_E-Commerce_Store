"use server"
import { storeDatabaseConnection } from "@/connections/mongodb/connections";


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