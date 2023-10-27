"use client";
import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import Image from "next/image";
import { BsTrash3 } from "react-icons/bs";

export interface CardProps {
  _id?: string;
  username: string;
  location: string;
  title: string;
  description: string;
  images: string[];
  price: number;
  user_image: string;
}

const Card: React.FC<CardProps> = ({
  username,
  user_image,
  location,
  title,
  description,
  images,
  price,
}) => {
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
    <div className="p-4">
      <div className="bg-white border rounded-md max-w-md relative">
        <button
          id="delete"
          className="absolute right-2 p-2 rounded-full hover:bg-red-500 top-2"
          onClick={handleDeleteProduct}
        >
          <BsTrash3 size={25} className="hover:fill-white" />
        </button>
        <div className="flex items-center px-4 py-3">
          <img className="h-8 w-8 rounded-full" src={user_image} />
          <div className="ml-3 ">
            <span className="text-sm font-semibold antialiased block leading-tight">
              {username}
            </span>
            <span className="text-gray-600 text-xs block">{location}</span>
          </div>
        </div>
        <div
          className="relative"
          style={{
            height: "250px",
            width: "350px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image
            src={images[0]}
            fill
            style={{ objectFit: "cover" }}
            alt={title}
            priority
          />
        </div>
        <div className="flex items-center justify-between mx-4 mt-3 mb-2">
          <div className="flex gap-5">
            <button id="like" onClick={handleLikeClick}>
              {isClicked ? (
                <AiFillHeart size={30} className="fill-red-500" />
              ) : (
                <AiOutlineHeart size={30} />
              )}
            </button>
            <button id="comment">
              <FaRegComment size={25} />
            </button>

            <button id="share">
              <FiSend size={30} />
            </button>
          </div>
          <div className="flex">
            <button id="save">
              <BiBookmark size={30} />
            </button>
          </div>
        </div>

        <div className="mx-4 mt-2 mb-4">
          <div className="font-semibold text-md">{title}</div>
          <div className="font-normal text-md">{description}</div>
        </div>

        <div className="font-semibold text-sm mx-4 mt-2 mb-4 w-11/12 flex flex-row justify-end">
          {currentLikes} likes
        </div>
      </div>
    </div>
  );
};

export default Card;
