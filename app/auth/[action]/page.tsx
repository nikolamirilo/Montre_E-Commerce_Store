import { SignIn, SignUp } from "@clerk/nextjs"

const Auth = ({ params }: { params: { action: string } }) => {
  return (
    <div className="flex mt-10 flex-row justify-center items-center" id="auth">
      {params.action == "log-in" ? <SignIn afterSignInUrl="/" /> : <SignUp afterSignUpUrl="/" />}
    </div>
  )
}

export default Auth
