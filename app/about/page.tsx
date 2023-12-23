const About = () => {
  return (
    <div
      className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark px-5"
      id="about">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between md:flex-row flex-col-reverse -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4 md:flex-row flex-col ">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <img
                    src="https://th.bing.com/th/id/R.dbdd60e61c66043f4823e08afcd9cd05?rik=sPAPvksCmqfS5g&riu=http%3a%2f%2fretaildesignblog.net%2fwp-content%2fuploads%2f2014%2f09%2fWSI-flagship-watch-store-by-StartJG-HK-Limited-Singapore-Malaysia-07-.jpg&ehk=OAX4X7Xlu%2fedrInMLZxF%2fOxK2lzypnD%2bVT1l903VUiI%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <img
                    src="https://th.bing.com/th/id/OIP.JWCWu2ystqbe8Loc-AdB7AHaFj?rs=1&pid=ImgDetMain"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src="https://i.pinimg.com/originals/1c/1f/45/1c1f451018c2752e9b4915dec214f7be.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <h2 className="mb-5 text-2xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Dobrodošli u Montre!
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                Montre je online destinacija posvećena pružanju nezaboravnih trenutaka kroz spoj
                elegancije i preciznosti. Specijalizujemo se u prodaji muških i ženskih satova, sa
                posebnim fokusom na ekskluzivne modele brendova Curren i Hannah Martin. Naša misija
                je jednostavna - omogućiti svakom kupcu pristup vrhunskim satovima koji će dodati
                notu stila i elegancije u svakom trenutku.
              </p>
              <span className="block mb-4 text-lg font-semibold text-primary">Naša Ponuda:</span>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                Montre donosi pažljivo izabran asortiman muških i ženskih satova, između kojih se
                ističu elegantni modeli brendova Curren i Hannah Martin. Svi naši satovi su odabrani
                s posebnom pažnjom kako bismo zadovoljili raznolike stilove i ukuse naših kupaca.
                Bez obzira tražite li klasičan sat za poslovne prilike ili modernu i atraktivnu
                varijantu za svakodnevne trenutke, Montre ima nešto za svakoga.
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                U budućnosti planiramo proširenje naše kolekcije sa još modela koji će odražavati
                najnovije trendove i udovoljavati raznovrsnim preferencijama naših kupaca. Montre
                nije samo online prodavnica satova; mi smo posvećeni stvaranju zajednice ljubitelja
                satova koji dele strast prema vrhunskom dizajnu i besprekornoj preciznosti.
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                Zahvaljujemo vam na poverenju i pozivamo vas da istražite našu pažljivo biranu
                kolekciju i započnete putovanje kroz vreme uz Montre satove!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
