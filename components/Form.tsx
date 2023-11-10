"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "../public/MontreLogoTransparent.png";
import { CloudinaryResponse } from "@/typescript/interfaces";
import { revalidateData } from "@/helpers";

const Form: React.FC = () => {
  const [displayImage, setDisplayImage] = useState("");
  const categoryInput = useRef<HTMLSelectElement>(null);
  const priceInput = useRef<HTMLInputElement>(null);
  const titleInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLTextAreaElement>(null);
  const imagesInput = useRef<HTMLInputElement>(null);
  const images: any = [];
  //Display different image every time new image is changed
  const handleInputImageChange = (e: any) => {
    const file = e?.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setDisplayImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const files = await imagesInput?.current?.files;
    if (!files) {
      console.error("No file selected.");
      return;
    }
    const formData = new FormData();

    for (let i = 0; i <= files.length; i++) {
      formData.append("file", files[i]);
      formData.append("upload_preset", "products");
      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/montre-cloudinary/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error(`Image upload failed: ${response.statusText}`);
        }

        // Now, extract and parse the JSON response correctly
        const uploadImage: CloudinaryResponse = await response.json();
        await images.push(uploadImage.url);
        formData.delete("file");
        // Rest of your code here, if needed
      } catch (error) {
        console.error("Error:", error);
      }
    }
    const uploadData = {
      title: titleInput.current!.value,
      price: priceInput.current!.value,
      category: categoryInput.current!.value,
      description: descriptionInput.current!.value,
      images: images,
    };
    console.log(uploadData);
    if (uploadData) {
      await fetch(
        "https://eu-central-1.aws.data.mongodb-api.com/app/data-eagdn/endpoint/data/v1/action/insertOne",
        {
          method: "POST",
          headers: {
            "api-key":
              "QZCIcGQluFrPOHPAMvvrk9taEjiMifFAtrjGnmlM2efolfQjELuTbLdJTWhbhuYQ",
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
          },
          body: JSON.stringify({
            dataSource: "MainCluster",
            database: "Store",
            collection: "products",
            document: uploadData,
          }),
        }
      ).then((response) => {
        console.log(response);
        //Set Initial data
        categoryInput.current!.value = "";
        priceInput.current!.value = "";
        titleInput.current!.value = "";
        descriptionInput.current!.value = "";
        setDisplayImage("");
        if (response.ok) {
          revalidateData();
          alert("Vas odgovor je zabelezen");
        } else {
          console.log(response.statusText);
        }
      });
    }
  };

  return (
    <div className="flex justify-center lg:py-8 px-2 sm:px-16 lg:px-52 pb-8 w-full">
      <div className="lg:w-8/12 w-full bg-white block rounded-lg px-4 py-16 sm:p-4 lg:p-16 md:border-2  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="text-center">
          <Image
            className="mx-auto"
            src={logo}
            alt="Leafs"
            width={120}
            height={120}
          />
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Dodaj novi proizvod
          </h2>
        </div>

        <form
          className="mt-8 space-y-6"
          encType="multipart/form-data"
          name="Form"
          method="POST"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Naslov proizvoda:
            </label>
            <div className="mt-1">
              <input
                ref={titleInput}
                id="title"
                name="title"
                placeholder="e.g. Curren TNG 876!"
                type="text"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:border-2 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Cena proizvoda:
            </label>
            <div className="mt-1">
              <input
                ref={priceInput}
                id="price"
                name="price"
                placeholder="e.g. Budapest, Hungary"
                type="text"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:border-2 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Kategorija proizvoda:
            </label>
            <div className="mt-1">
              <select
                ref={categoryInput}
                id="category"
                name="category"
                className="w-full h-10 border-2 text-sm focus:border-amber-500 focus:outline-none rounded-lg cursor-pointer px-2 md:px-3 py-0 md:py-1 text-gray-900"
              >
                <option value="Premium">Premium</option>
                <option value="Mid">Mid</option>
                <option value="Casual">Casual</option>
                <option value="Sport">Sport</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Opis proizvoda:
            </label>
            <div className="mt-1">
              <textarea
                ref={descriptionInput}
                placeholder="e.g. Čelični sat sa kožnom narukvicom..."
                id="description"
                name="description"
                rows={4}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:border-2 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="image-upload"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Slike proizvoda:
            </label>
            <div className="mt-2">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="image-input"
                  className="flex relative flex-col items-center justify-center bg-center bg-cover w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:border-amber-500"
                >
                  {displayImage !== "" ? (
                    <Image
                      src={displayImage}
                      fill
                      className="object-cover object-center"
                      priority
                      alt="Background"
                    />
                  ) : null}
                  <div
                    className={`flex flex-col items-center justify-center pt-5 pb-6 ${
                      displayImage == "" ? "" : "hidden"
                    }`}
                  >
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    onChange={handleInputImageChange}
                    multiple={true}
                    id="image-input"
                    ref={imagesInput}
                    name="image-input"
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              id="submit-button"
              className="uppercase w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-amber-500 focus:border-2"
              onClick={(e: any) => {
                handleFormSubmit(e);
              }}
            >
              Dodaj proizvod
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
