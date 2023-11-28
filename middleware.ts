import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
  publicRoutes: [
    "/",
    "/contact",
    "/about",
    "/products/watches",
    "/products/watches/offers/super-deals",
    "/products/watches/categories/man",
    "/products/watches/categories/woman",
    "/products/watches/:id",
    "/api/webhooks(.*)"
  ]
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
