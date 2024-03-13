import Heading from "@/components/helpers/Heading"
import data from "@/data/faq.json"
import Link from "next/link"

const FAQ = () => {
  return (
    <section className="py-10 sm:py-16">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Heading value="Često postavljena pitanja" />
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Da bismo vam pružili potpunu jasnoću, identifikovali smo neka od najčešćih pitanja. U
            ovoj sekciji ćemo odgovoriti na pitanja koja često postavljaju naši kupci.
          </p>
        </div>
        <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
          {data.faq.map((item, idx) => {
            return (
              <div className="flex items-start" key={idx}>
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                  <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                  <p className="text-xl font-semibold text-gray-900">{item.question}</p>
                  <p className="mt-4 text-base text-gray-600">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-center mt-12 md:mt-20">
          <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
            <p className="text-gray-50">
              Niste pronašli odgovor na Vaše pitanje?{" "}
              <Link
                href="/contact"
                className="text-amber-400 transition-all duration-200 hover:text-amber-500 focus:text-amber-500 hover:underline">
                Kontaktirajte nas
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
