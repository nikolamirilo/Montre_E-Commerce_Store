import { SignIn, SignUp } from "@clerk/nextjs"

const Auth = ({ params }: { params: { action: string } }) => {
  return (
    <main className="flex mt-10 flex-row justify-center items-center">
      {params.action == "log-in" ? <SignIn /> : <SignUp />}
    </main>
  )
}

export default Auth
