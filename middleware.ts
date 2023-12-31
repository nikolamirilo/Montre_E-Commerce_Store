import { authMiddleware, redirectToSignIn } from "@clerk/nextjs"
import { NextResponse } from "next/server"

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
    "/api/webhooks(.*)",
    "/api/products/order",
    "/api/products/:id",
    "/api/send-email",
    "/auth/:action",
    "/sitemap.xml",
    "/robots.txt",
    "/order/:id",
    "/thank-you",
  ],
  afterAuth(auth, req, evt) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url })
    }
    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next()
    }
    return NextResponse.next()
  },
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
