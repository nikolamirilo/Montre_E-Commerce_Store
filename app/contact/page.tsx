import Link from "next/link"

const Contact = async () => {
  // const fromEmailName = "Nikola" // i.e. the "sales" in sales@example.com

  // const emailAddressId = "nikolamirilo@gmail.com"

  // const subject = "Free tacos"

  // const body = "Join us via Zoom for remote Taco Tuesday!"

  // async function sendEmail() {
  //   try {
  //     await clerkClient.emails.createEmail({
  //       fromEmailName,
  //       subject,
  //       body,
  //       emailAddressId,
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // sendEmail()
  return (
    <main className="flex flex-row items-center justify-center w-full">
      <div className="py-8 lg:py-16 mx-auto w-full flex flex-col items-center justify-center mt-10 lg:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Kontaktiraj nas
        </h2>
        <p className="mb-8 font-light text-center text-gray-500 sm:text-xl w-full md:2/3 lg:w-1/2 px-5">
          Vaša povratna informacija je od suštinskog značaja za nas! Ako imate bilo kakva pitanja,
          komentare ili jednostavno želite podeliti svoje iskustvo, slobodno nas kontaktirajte.
        </p>
        <div className="flex w-full px-5 lg:w-[90%] xl:w-3/4 flex-col gap-5 lg:gap-0 lg:flex-row lg:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] lg:py-20 lg:px-10 lg:rounded-lg">
          <form action="submit" className="w-full lg:w-2/3 flex flex-col gap-3">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                Tvoj E-Mail:
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-amber-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">
                Naslov:
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none focus:border-amber-500"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">
                Tvoja poruka:
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none focus:border-amber-500"></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-amber-500 sm:w-fit hover:bg-amber-600 focus:ring-4 focus:outline-none">
              Pošalji
            </button>
          </form>
          <div className="lg:hidden w-full text-center flex flex-col items-center justify-center">
            <span className="w-2/3"> ili nas kontaktirajte putem društvenih mreža</span>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center gap-3">
            <div className="hidden lg:flex flex-col justify-center items-start lg:w-1/2">
              <h1 className="font-bold text-xl">Društvene mreže:</h1>
            </div>
            <div className="flex flex-col justify-center items-start w-full lg:w-1/2">
              <label htmlFor="instagram">Instagram:</label>
              <Link
                className="text-blue-500 underline"
                id="instagram"
                href="https://www.instagram.com/montre.satovi">
                https://www.instagram.com/montre.satovi
              </Link>
            </div>
            <div className="flex flex-col justify-center items-start w-full lg:w-1/2">
              <label htmlFor="facebook">Facebook:</label>
              <Link
                className="text-blue-500 underline"
                id="facebook"
                href="https://www.facebook.com/montre.satovi">
                https://www.facebook.com/montre.satovi
              </Link>
            </div>
            <div className="flex flex-col justify-center items-start w-full lg:w-1/2">
              <label htmlFor="tik-tok">Tik Tok:</label>
              <Link
                className="text-blue-500 underline"
                id="tik-tok"
                href="https://www.tiktok.com/montre.satovi">
                https://www.tiktok.com/montre.satovi
              </Link>
            </div>
            <div className="flex flex-col justify-center items-start w-full lg:w-1/2">
              <label htmlFor="email">E-Mail:</label>
              <Link
                className="text-blue-500 underline"
                id="email"
                href="mailto:satovi.montre@gmail.com">
                satovi.montre@gmail.com
              </Link>
            </div>
            <div className="flex flex-col justify-center items-start w-full lg:w-1/2">
              <label htmlFor="phone">Phone:</label>
              <Link className="text-blue-500 underline" id="phone" href="phone:+381604278175">
                +381604278175
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
