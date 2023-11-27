import { authMiddleware } from "@clerk/nextjs"

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: [
    "/",
    "/contact",
    "/order",
    "/about",
    "/products/watches",
    "/auth/:action",
    "/products/watches/offers/super-deals",
    "/products/watches/categories/man",
    "/products/watches/categories/woman",
    "/products/watches/:id",
  ],
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
