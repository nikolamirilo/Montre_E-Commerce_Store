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
    "/api/webhooks(.*)",
    "/auth/:action"
  ],
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}


// INFO: Clerk: The request to /order is being redirected because there is no signed-in user, and the path is not included in `ignoredRoutes` or `publicRoutes`. To prevent this behavior, choose one of:

// 1. To make the route accessible to both signed in and signed out users, add "/order" to the `publicRoutes` array passed to authMiddleware
// 2. To prevent Clerk authentication from running at all, pass `ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/order"]` to authMiddleware
// 3. Pass a custom `afterAuth` to authMiddleware, and replace Clerk's default behavior of redirecting unless a route is included in publicRoutes

// For additional information about middleware, please visit https://clerk.com/docs/nextjs/middleware
// (This log only appears in development mode, or if `debug: true` is passed to authMiddleware)
// INFO: Clerk: The request to /order is being redirected because there is no signed-in user, and the path is not included in `ignoredRoutes` or `publicRoutes`. To prevent this behavior, choose one of:

// 1. To make the route accessible to both signed in and signed out users, add "/order" to the `publicRoutes` array passed to authMiddleware
// 2. To prevent Clerk authentication from running at all, pass `ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/order"]` to authMiddleware
// 3. Pass a custom `afterAuth` to authMiddleware, and replace Clerk's default behavior of redirecting unless a route is included in publicRoutes

// For additional information about middleware, please visit https://clerk.com/docs/nextjs/middleware
// (This log only appears in development mode, or if `debug: true` is passed to authMiddleware)