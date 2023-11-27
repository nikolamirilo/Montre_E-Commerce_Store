"use client"
import { SignIn, SignUp, useSignUp } from "@clerk/nextjs"

const Auth = ({ params }: { params: { action: string } }) => {
  const action = params.action
  const { signUp } = useSignUp()
  console.log(signUp)
  return (
    <main className="flex justify-center items-center">
      {action == "sign-in" ? (
        <SignIn signUpUrl="/auth/sign-up" />
      ) : (
        <SignUp signInUrl="/auth/sign-in" />
      )}
    </main>
  )
}
export default Auth

{
  /* <section className="bg-white relative">
<div className="flex justify-center h-screen">
  <div
    className="hidden bg-cover lg:block md:1/3 xl:w-1/2"
    style={{
      backgroundImage:
        "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
    }}>
    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
      <div>
        <h2 className="text-4xl font-bold text-white">Montre</h2>

        <p className="max-w-xl mt-3 text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla
          laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae
        </p>
      </div>
    </div>
  </div>

  <div className="flex items-center w-full max-w-md px-6 mx-auto md:1/3 xl:w-1/2">
    <div className="flex-1 w-full">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-center text-gray-700 ">Montre</h2>

        <p className="mt-3 text-gray-500">Sign in to access your account</p>
      </div>

      <div className="mt-8">
        <form className="w-full">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm text-gray-600 -200">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md -600 -900 -300 -700 focus:border-amber-400 -amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm text-gray-600 -200">
                Password
              </label>
              <a
                href="#"
                className="text-sm text-gray-400 focus:text-amber-500 hover:text-amber-500 hover:underline">
                Forgot password?
              </a>
            </div>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md -600 -900 -300 -700 focus:border-amber-400 -amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          {/* <div id="auth-providers">
            <button>
              <FaGoogle />
            </button>
          </div> 

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-amber-500 rounded-md hover:bg-amber-600 focus:outline-none focus:bg-amber-400 focus:ring focus:ring-amber-300 focus:ring-opacity-50">
              {action == "log-in" ? "Log-In" : "Sign-Up"}
            </button>
          </div>
        </form>

        <p className="mt-6 text-sm text-center text-gray-400">
          Don&#x27;t have an account yet?{" "}
          <a
            href="#"
            className="text-amber-500 focus:outline-none focus:underline hover:underline">
            {action == "log-in" ? "Sign-Up" : "Log-In"}
          </a>
          .
        </p>
      </div>
    </div>
  </div>
</div>
</section> */
}
