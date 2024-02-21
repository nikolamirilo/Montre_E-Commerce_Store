import { createNewUser, deleteSingleUser, updateSingleUser } from "@/actions/server/users"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { Webhook } from "svix"

//Through this route when user is for example created data from Clerk is sent to this route
//and then user will be created in MongoDB as well

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error("Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local")
  }

  // Get the headers
  const headerPayload = headers()
  const svix_id = headerPayload.get("svix-id")
  const svix_timestamp = headerPayload.get("svix-timestamp")
  const svix_signature = headerPayload.get("svix-signature")

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET)

  let evt: any

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as any
  } catch (err) {
    console.error("Error verifying webhook:", err)
    return new Response("Error occured", {
      status: 400,
    })
  }

  // Get the ID and type
  const uid = evt.data.id
  const email = evt.data.email_addresses[0].email_address
  const fullName = `${evt.data.first_name} ${evt.data.last_name}`
  const eventType = evt.type
  const newUser = {
    uid: uid,
    fullName: fullName,
    email: email,
    orders: [],
    cart: [],
  }
  console.log(eventType)
  if (eventType == "user.created") {
    await createNewUser(newUser!)
  }
  if (eventType == "user.deleted") {
    await deleteSingleUser(uid!)
  }
  if (eventType == "user.updated") {
    await updateSingleUser({ uid, fullName, email })
  }
  return NextResponse.json({ message: "Successfully Done" }, { status: 200 })
}
