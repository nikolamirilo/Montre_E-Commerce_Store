import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Montre Satovi",
    short_name: "Montre Shop",
    description:
      "Unikatna kolekcija muških i ženskih satova. Naša misija je jednostavna. Želimo da vam omogućimo pristup vrhunskim satovima koji ne samo da mere vreme, već ga i čine vrednim pamćenja!",
    theme_color: "#000000",
    categories: [
      "luxury watches",
      "e-commerce",
      "sport watches",
      "men watches",
      "women watches",
      "casual watches",
      "watches",
    ],
    background_color: "#000000",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/opengraph-image.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/twitter-image.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  }
}
