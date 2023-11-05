"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";

export interface CardProps {
  _id?: string;
  title: string;
  images: string[];
  price: number;
  category: string;
}

const ProductCard: React.FC<CardProps> = ({
  _id,
  title,
  images,
  price,
  category,
}) => {
  const router = useRouter();
  const [mounted, setMounted] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState(false);
  const [currentLikes, setCurrentLikes] = useState<number>(price);

  async function handleLikeClick() {
    //Replace with Mongo DB API
    // if (isClicked) {
    //   setIsClicked(false);
    //   setCurrentLikes((prevLikes) => prevLikes - 1);
    // } else {
    //   setIsClicked(true);
    //   setCurrentLikes((prevLikes) => prevLikes + 1);
    //   try {
    //     const res = await fetch(`/api/Products/${_id}`, {
    //       method: "PUT",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //         "Cache-Control": "no-cache, no-store",
    //       },
    //       body: JSON.stringify({
    //         likes: currentLikes + 1,
    //       }),
    //     });
    //     console.log(res);
    //   } catch (error) {
    //     console.log(error as Error);
    //   }
    // }
  }

  const handleDeleteProduct = async () => {
    //Replace with Mongo DB API
    // try {
    //   const res = await fetch(`/api/Products/${_id}`, {
    //     method: "DELETE",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //       "Cache-Control": "no-cache, no-store",
    //     },
    //   });
    //   console.log(res);
    //   revalidateData();
    // } catch (error) {
    //   console.log(error as Error);
    // }
  };

  useEffect(() => {
    // setCurrentLikes(price);
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="max-w-xl">
      <div className="bg-white shadow-xl rounded-lg max-w-lg">
        <div
          className="relative w-80 h-80 xs:w-88 xs:h-88 sm:w-96 sm:h-96 cursor-pointer"
          onClick={() => {
            router.push(`/products/${_id}`);
          }}
        >
          <Image
            className="rounded-t-lg p-8 object-cover object-center"
            fill
            src={images[0]}
            alt="product image"
          />
        </div>
        <div className="px-3 md:px-5 pb-5">
          <a href="#">
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight">
              {title}
            </h3>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <span className="rounded-xl border-2 border-gray-800 py-1 px-5">
              {category}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">
              ${price}
            </span>
            <a
              href="#"
              className="text-white bg-amber-500 hover:bg-amber-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex flex-row gap-2 justify-center items-center"
            >
              <BsCart3 size={25} /> Dodaj u korpu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
