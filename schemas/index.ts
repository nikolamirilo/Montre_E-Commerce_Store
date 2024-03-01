import {
  aboutPage,
  allWatches,
  contactPage,
  homePage,
  menWatches,
  superDealsWatches,
  womenWatches,
} from "@/constants"
import moment from "moment"
import { ContactPage, Organization, Product, WebSite, WithContext } from "schema-dts"

export const homePageSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: homePage.title,
  description: homePage.description,
  url: "https://www.montre-shop.com/",
  creator: "Montre Shop",
  image: "https://www.montre-shop.com/opengraph-image.png",
  sameAs: [
    "https://www.facebook.com/people/Montre-Satovi/61553370101519/?mibextid=LQQJ4d",
    "https://www.instagram.com/montre.satovi/",
    "https://www.tiktok.com/@montre.satovi",
  ],
}
export const aboutPageSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: aboutPage.title,
  description: aboutPage.description,
  url: aboutPage.link,
  image: `${aboutPage.link}/opengraph-image.png`,
  contactPoint: {
    "@type": "ContactPoint",
    email: "satovi.montre@gmail.com",
    telephone: "+381604278175",
  },
  founder: "Montre Shop",
  location: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beograd",
      addressRegion: "Srbija",
      postalCode: "11000",
      addressCountry: "Srbija",
    },
  },
  sameAs: [
    "https://www.facebook.com/people/Montre-Satovi/61553370101519/?mibextid=LQQJ4d",
    "https://www.instagram.com/montre.satovi/",
    "https://www.tiktok.com/@montre.satovi",
  ],
}

export const contactPageSchema: WithContext<ContactPage> = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: contactPage.title,
  description: contactPage.description,
  url: contactPage.link,
  image: `${contactPage.link}/opengraph-image.png`,
  sameAs: [
    "https://www.facebook.com/people/Montre-Satovi/61553370101519/?mibextid=LQQJ4d",
    "https://www.instagram.com/montre.satovi/",
    "https://www.tiktok.com/@montre.satovi",
  ],
  contentLocation: "Srbija",
  creator: "Montre Shop",
}

export function getProductJSONSchema(
  name: string,
  brand: string,
  category: string,
  price: number,
  description: string,
  image: string,
  productCode: string
) {
  const currentDate = moment()
  const schema: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    brand,
    url: `https://www.montre-shop.com/products/watches/${productCode}`,
    keywords: name,
    sku: productCode,
    offers: {
      "@type": "Offer",
      price: price.toString(),
      priceCurrency: "RSD",
      availability: "InStock",
      priceValidUntil: `${currentDate}`,
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "SR",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 14,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/ReturnShippingFees",
        returnShippingFeesAmount: {
          "@type": "MonetaryAmount",
          currency: "RSD",
          minValue: 1000,
          maxValue: 3000,
          validFrom: `${currentDate}`,
          validThrough: `${currentDate}`,
          value: 5000,
        },
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "SR",
          addressRegion: "Europe",
          postalCode: "11000",
        },
        shippingRate: {
          "@type": "MonetaryAmount",
          currency: "RSD",
          minValue: 0,
          maxValue: 5000,
          validFrom: `${currentDate}`,
          validThrough: `${currentDate}`,
          value: 400,
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          businessDays: {
            "@type": "OpeningHoursSpecification",
            opens: "7am",
            closes: "20pm",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            validFrom: `${currentDate}`,
            validThrough: `${currentDate}`,
          },
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 2,
            value: 1,
            unitCode: "d",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 2,
            value: 1,
            unitCode: "d",
          },
          cutoffTime: `${new Date()}`,
        },
      },
    },
    itemCondition: "https://schema.org/NewCondition",
    manufacturer: brand,
    model: name,
    category: "Satovi",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1",
    },
    review: {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: category == "men" ? "Nikola" : "Isidora",
      },
      datePublished: "2024-02-09",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.8",
        bestRating: "5",
        worstRating: "3.5",
      },
      name: "Odlični satovi!",
      reviewBody: `${
        category == "men" ? "Kupio sam " : "Kupila sam "
      } ${name}. Sat je jako elegantan i kvalitetan. Uklapa se sa svakom kombinacijom.`,
    },
  }

  return schema
}
export const menProductsPageSchema: WithContext<Product> = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: menWatches.title,
  description: menWatches.description,
  category: "Satovi",
  review: {
    "@type": "Review",
    author: {
      "@type": "Person",
      name: "Nikola",
    },
    datePublished: "2024-02-09",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "3.5",
    },
    name: "Odlični satovi!",
    reviewBody:
      "Kupio sam Curren Imperial. Sat je jako elegantan i kvalitetan. Uklapa se sa svakom kombinacijom.",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Muškarci",
  },
  url: menWatches.link,
  image: `${menWatches.link}/opengraph-image.jpg`,
  brand: {
    "@type": "Brand",
    name: "Montre Shop",
  },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "4000",
    highPrice: "10000",
    priceCurrency: "RSD",
    offerCount: "6",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1",
  },
}
export const womenProductsPageSchema: WithContext<Product> = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: womenWatches.title,
  description: womenWatches.description,
  category: "Satovi",
  review: {
    "@type": "Review",
    author: {
      "@type": "Person",
      name: "Isidora",
    },
    datePublished: "2024-02-09",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "3.8",
    },
    name: "Vrhunski kvalitet!",
    reviewBody:
      "Kupila sam Hannah Martin Midnight. Oduševljena sam dizajnom sata i kako se lepo uklapa uz svaku odevnu kombinaciju.",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Žene",
  },
  url: womenWatches.link,
  image: `${womenWatches.link}/opengraph-image.jpg`,
  brand: {
    "@type": "Brand",
    name: "Montre Shop",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1",
  },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "4000",
    highPrice: "10000",
    priceCurrency: "RSD",
    offerCount: "6",
  },
}
export const superDealsProductsPageSchema: WithContext<Product> = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: superDealsWatches.title,
  description: superDealsWatches.description,
  category: "Satovi",
  review: {
    "@type": "Review",
    author: {
      "@type": "Person",
      name: "Kristina",
    },
    datePublished: "2024-02-09",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.5",
      bestRating: "4.8",
      worstRating: "3",
    },
    name: "Jako povoljne cene",
    reviewBody:
      "Kupila sam Hannah Martin Classic. Cena sata je jako pristupačna u više nego zadovoljavajući kvalitet",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Svi",
  },
  url: superDealsWatches.link,
  image: `${superDealsWatches.link}/opengraph-image.jpg`,
  brand: {
    "@type": "Brand",
    name: "Montre Shop",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "1",
  },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "4000",
    highPrice: "10000",
    priceCurrency: "RSD",
    offerCount: "12",
  },
}
export const allProductsPageSchema: WithContext<Product> = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: allWatches.title,
  description: allWatches.description,
  category: "Satovi",
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Kristina",
      },
      datePublished: "2024-02-09",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.5",
        bestRating: "4.8",
        worstRating: "3",
      },
      name: "Jako povoljne cene",
      reviewBody:
        "Kupila sam Hannah Martin Classic. Cena sata je jako pristupačna u više nego zadovoljavajući kvalitet",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Isidora",
      },
      datePublished: "2024-02-09",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "3.8",
      },
      name: "Vrhunski kvalitet!",
      reviewBody:
        "Kupila sam Hannah Martin Midnight. Oduševljena sam dizajnom sata i kako se lepo uklapa uz svaku odevnu kombinaciju.",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Nikola",
      },
      datePublished: "2024-02-09",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.8",
        bestRating: "5",
        worstRating: "3.5",
      },
      name: "Odlični satovi!",
      reviewBody:
        "Kupio sam Curren Imperial. Sat je jako elegantan i kvalitetan. Uklapa se sa svakom kombinacijom.",
    },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Svi",
  },
  url: allWatches.link,
  image: `${allWatches.link}/opengraph-image.png`,
  brand: {
    "@type": "Brand",
    name: "Montre Shop",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "3",
  },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "4000",
    highPrice: "10000",
    priceCurrency: "RSD",
    offerCount: "12",
  },
}
