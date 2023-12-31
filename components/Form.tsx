"use client"
import { handleProductUpload, uploadImagesToCloudinary } from "@/actions/client/products"
import { FormInitialData, Product } from "@/typescript/interfaces"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { BsTrash3 } from "react-icons/bs"
import logo from "../public/MontreLogoTransparent.png"
import Loader from "./Loader"

const Form = ({ initialData, action }: { initialData?: FormInitialData; action: string }) => {
  const [displayImages, setDisplayImages] = useState<string[]>([])
  const [id, setId] = useState<string>("")
  const [progress, setProgress] = useState<number>(0)
  const titleInput = useRef<HTMLInputElement>(null)
  const descriptionInput = useRef<HTMLTextAreaElement>(null)
  const classInput = useRef<HTMLSelectElement>(null)
  const categoryInput = useRef<HTMLSelectElement>(null)
  const brandInput = useRef<HTMLSelectElement>(null)
  const priceInput = useRef<HTMLInputElement>(null)
  const isPublicInput = useRef<HTMLInputElement>(null)
  const discountInput = useRef<HTMLInputElement>(null)
  const imagesInput = useRef<HTMLInputElement>(null)
  var images: string[] = []

  async function handleInputImageChange() {
    const files = imagesInput?.current?.files
    if (files) {
      const newImages = await Promise.all(
        Array.from(files).map((file) => {
          return new Promise<string>((resolve) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
              resolve(reader.result as string)
            }
          })
        })
      )
      setDisplayImages((prevImages) => [...prevImages, ...newImages])
    }
  }

  function handleDeleteImage(index: number) {
    setDisplayImages((prevImages) => {
      const newImages = [...prevImages]
      newImages.splice(index, 1)
      return newImages
    })
    images.splice(index, 1)
  }

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (
      categoryInput.current!.value != "" &&
      brandInput.current!.value != "" &&
      classInput.current!.value != ""
    ) {
      try {
        const files = imagesInput?.current?.files
        if (!files) {
          console.error("No file selected.")
          return
        }
        setProgress(50)
        await uploadImagesToCloudinary(files, images)
        const price = parseInt(priceInput.current!.value)
        const discount = parseInt(discountInput.current!.value)
        const discountedPrice = Math.round(price * (1 - discount / 100))
        const uploadData: Product = {
          title: titleInput.current!.value,
          price: price,
          class: classInput.current!.value,
          category: categoryInput.current!.value,
          brand: brandInput.current!.value,
          description: descriptionInput.current!.value,
          isPublic: isPublicInput.current!.checked,
          discount: discount,
          discountedPrice: discountedPrice,
          isOnDiscount: discount > 0 ? true : false,
          images: images,
        }
        await handleProductUpload(images, uploadData, action, id).then(() => {
          setProgress(100)
          alert("Vaš odgovor je zabeležen!")
          setId("")
          titleInput.current!.value = ""
          priceInput.current!.value = ""
          classInput.current!.value = ""
          categoryInput.current!.value = ""
          descriptionInput.current!.value = ""
          isPublicInput.current!.checked = false
          discountInput.current!.value = ""
          brandInput.current!.value = ""
          setDisplayImages([])
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  //Set initial Values in case I want to edit product
  useEffect(() => {
    setProgress(0)
    if (initialData) {
      setId(initialData._id)
      titleInput.current!.value = initialData.title
      priceInput.current!.value = initialData.price
      classInput.current!.value = initialData.class
      categoryInput.current!.value = initialData.category
      descriptionInput.current!.value = initialData.description
      isPublicInput.current!.checked = initialData.isPublic
      discountInput.current!.value = initialData.discount
      brandInput.current!.value = initialData.brand
      setDisplayImages(initialData.images)
    }
  }, [initialData])
  return (
    <div className="flex justify-center items-center min-h-screen lg:py-10 w-full">
      <div
        className={`absolute flex flex-row justify-center items-center w-full h-full bg-black/80 z-20 ${
          progress == 50 ? "block" : "hidden"
        }`}>
        <Loader />
      </div>
      <div
        className={`w-full md:w-10/12 lg:w-2/3 xl:w-1/2 md:mt-5 lg:mt-2 bg-white block rounded-lg px-4 py-16 sm:p-4 lg:p-16 md:border-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]`}>
        <div className="text-center">
          <Image className="mx-auto" src={logo} alt="Leafs" width={160} height={120} />
          <h2 className="mt-6 text-2xl font-bold text-gray-900 uppercase">
            {action == "create" ? "Dodaj novi proizvod" : "Ažuriraj proizvod"}
          </h2>
        </div>
        <form
          className="mt-8 flex flex-col w-full gap-2"
          encType="multipart/form-data"
          onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="title" className="block text-sm font-medium leading-5 text-gray-700">
              Naslov proizvoda:
            </label>
            <div className="mt-1">
              <input
                required
                ref={titleInput}
                id="title"
                name="title"
                placeholder="e.g. Curren TNG 876"
                type="text"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:border-2 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium leading-5 text-gray-700">
              Cena proizvoda [RSD]:
            </label>
            <div className="mt-1">
              <input
                required
                ref={priceInput}
                id="price"
                name="price"
                placeholder="e.g. 50"
                type="text"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:border-2 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label htmlFor="discount" className="block text-sm font-medium leading-5 text-gray-700">
              Unesi popust [%]:
            </label>
            <div className="mt-1">
              <input
                ref={discountInput}
                id="discount"
                name="discount"
                min={5}
                max={80}
                placeholder="e.g. 20"
                type="text"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:border-2 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="category-price"
              className="block text-sm font-medium leading-5 text-gray-700">
              Klasa proizvoda:
            </label>
            <div className="mt-1">
              <select
                required
                ref={classInput}
                id="class"
                name="class"
                className="w-full bg-white h-10 border-2 text-sm focus:border-amber-500 focus:outline-none rounded-lg cursor-pointer px-2 py-0 md:py-1 text-gray-900">
                <option value="">Izaberi</option>
                <option value="Premium">Premium</option>
                <option value="Casual">Casual</option>
                <option value="Sport">Sport</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium leading-5 text-gray-700">
              Kategorija proizvoda:
            </label>
            <div className="mt-1">
              <select
                required
                ref={categoryInput}
                id="category"
                name="category"
                className="w-full bg-white h-10 border-2 text-sm focus:border-amber-500 focus:outline-none rounded-lg cursor-pointer px-2 py-0 md:py-1 text-gray-900">
                <option value="">Izaberi</option>
                <option value="man">Muški</option>
                <option value="woman">Ženski</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="brand" className="block text-sm font-medium leading-5 text-gray-700">
              Brend:
            </label>
            <div className="mt-1">
              <select
                required
                ref={brandInput}
                id="brand"
                name="brand"
                className="w-full h-10 bg-white border-2 text-sm focus:border-amber-500 focus:outline-none rounded-lg cursor-pointer px-2 py-0 md:py-1 text-gray-900">
                <option value="">Izaberi</option>
                <option value="Curren">Curren</option>
                <option value="Lige">Lige</option>
                <option value="Naviforce">Naviforce</option>
                <option value="Benyar">Benyar</option>
                <option value="Hannah Martin">Hannah Martin</option>
                <option value="Geneva">Geneva</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-5 text-gray-700">
              Opis proizvoda:
            </label>
            <div className="mt-1">
              <textarea
                required
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
              className="block text-sm font-medium leading-5 text-gray-700">
              Slike proizvoda:
            </label>
            <div className="mt-2">
              <div className="flex flex-col w-full gap-2">
                <div id="add-image">
                  <div className="flex flex-row justify-start items-center gap-2 border border-gray-300 focus:border-amber-500 rounded-md p-2">
                    <label
                      htmlFor="image-input"
                      className="text-white bg-amber-500 hover:bg-amber-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex flex-row gap-2 justify-center items-center cursor-pointer">
                      Dodaj slike
                    </label>
                    Broj dodatih slika: {displayImages.length}
                  </div>
                  <input
                    className="hidden"
                    aria-describedby="file_input_help"
                    required
                    onChange={handleInputImageChange}
                    multiple={true}
                    id="image-input"
                    ref={imagesInput}
                    name="image-input"
                    type="file"
                    accept="image/*"
                  />
                </div>
                <div
                  className={`relative flex-row flex-wrap gap-1 items-center justify-center bg-center bg-cover w-full min-h-[10rem] h-fit py-6 md:border md:border-gray-300 rounded-lg bg-white  ${
                    displayImages.length !== 0 ? "flex" : "hidden"
                  }`}>
                  {displayImages.length !== 0
                    ? displayImages.map((image, idx) => {
                        return (
                          <div
                            className="relative w-full h-52 md:w-1/2 xl:w-[30%] cursor-pointer"
                            key={idx}>
                            <button
                              id="delete"
                              className="absolute top-0 right-0 p-1 rounded-full bg-red-500 text-white z-10"
                              onClick={() => {
                                handleDeleteImage(idx)
                              }}>
                              <BsTrash3 size={25} />
                            </button>
                            <Image
                              src={image}
                              fill
                              priority
                              className="object-cover object-center"
                              alt="Input Picture"
                            />
                          </div>
                        )
                      })
                    : null}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center relative left-1">
            <input
              ref={isPublicInput}
              id="is-public"
              type="checkbox"
              className="w-4 h-4 rounded cursor-pointer"
            />
            <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900">
              Proizvod je javno dostupan
            </label>
          </div>
          <div className="mt-2">
            <button
              type="submit"
              id="submit-button"
              disabled={progress == 50 ? true : false}
              className="uppercase w-full flex justify-center py-2 px-4 text-white rounded-md">
              {action === "create" ? "Dodaj proizvod" : "Sačuvaj izmene"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
