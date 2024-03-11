import { Option, PageDescription } from "@/typescript/types"

export const APP_URL = process.env.NEXT_PUBLIC_WEB_APP_URL
export const SHIPPING_COST: number = 400
export const KEYWORDS: string[] = [
  "Satovi",
  "Muški satovi",
  "Ženski satovi",
  "Muški nakit",
  "Ženski nakit",
  "Poklon za devojku",
  "Poklon za dečka",
  "Curren",
  "Lige",
  "Hannah Martin",
]
export const menWatches: PageDescription = {
  title: "Muški satovi",
  description:
    "Montre muški satovi su više od merila vremena, oni su izraz snage, stila i samopouzdanja. Otkrijte jedinstvene modele koji će dodati notu luksuza vašem izgledu.",
  link: "https://www.montre-shop.com/products/watches/categories/men",
}
export const womenWatches: PageDescription = {
  title: "Ženski satovi",
  description:
    "Istražite pažljivo biranu kolekciju Montre ženskih satova i pronađite sat koji u potpunosti odgovara vašoj meri i ukusu! Neka on postane izraz vašeg stila.",
  link: "https://www.montre-shop.com/products/watches/categories/women",
}
export const superDealsWatches: PageDescription = {
  title: "Satovi na akciji",
  description:
    "Istražite raznovrsne stilove i tehničke karakteristike i započnite putovanje kroz vreme uz svoj idealni sat povoljnije nego ikada!",
  link: "https://www.montre-shop.com/products/watches/offers/super-deals",
}
export const allWatches: PageDescription = {
  title: "Svi satovi",
  description:
    "Montre donosi pažljivo izabran asortiman muških i ženskih satova. Svi naši satovi su odabrani tako da zadovolje raznolike stilove i ukuse naših kupaca.",
  link: "https://www.montre-shop.com/products/watches",
}
export const homePage: PageDescription = {
  title: "Montre Satovi",
  description:
    "Unikatna kolekcija muških i ženskih satova. Naša misija je da vam omogućimo pristup vrhunskim satovima koji ne samo da mere vreme, već ga i čine vrednim pamćenja!",
  link: "https://www.montre-shop.com",
}
export const contactPage: PageDescription = {
  title: "Kontaktirajte nas",
  description:
    "Vaša povratna informacija je od suštinskog značaja za nas! Ako imate bilo kakva pitanja ili komentare slobodno nas kontaktirajte.",
  link: "https://www.montre-shop.com/contact",
}
export const aboutPage: PageDescription = {
  title: "O nama",
  description:
    "Montre je online destinacija posvećena pružanju nezaboravnih trenutaka kroz satove koji su spoj elegancije i preciznosti.",
  link: "https://www.montre-shop.com/about",
}
export const classOptions: Option[] = [
  {
    label: "Premium",
    value: "Premium",
  },
  {
    label: "Casual",
    value: "Casual",
  },
  {
    label: "Sport",
    value: "Sport",
  },
]
export const typOptions: Option[] = [
  {
    label: "Analogni",
    value: "Analogni",
  },
  {
    label: "Hronograf",
    value: "Hronograf",
  },
  {
    label: "GMT",
    value: "GMT",
  },
]
export const brandOptions: Option[] = [
  {
    label: "Curren",
    value: "Curren",
  },
  {
    label: "Hannah Martin",
    value: "Hannah Martin",
  },
  {
    label: "Lige",
    value: "Lige",
  },
  {
    label: "Naviforce",
    value: "Naviforce",
  },
  {
    label: "Benyar",
    value: "Benyar",
  },
]
export const categoryOptions: Option[] = [
  {
    label: "Muški",
    value: "men",
  },
  {
    label: "Ženski",
    value: "women",
  },
]
