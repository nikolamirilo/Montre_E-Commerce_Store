"use client"
import { brandOptions, categoryOptions, classOptions, typOptions } from "@/constants"
import { ProductFormProps } from "@/typescript/interfaces"
import Image from "next/image"
import React from "react"
import { BsTrash3 } from "react-icons/bs"
import { LuLoader2 } from "react-icons/lu"
import InfoModal from "../modals/InfoModal"
import Checkbox from "./elements/Checkbox"
import Input from "./elements/Input"
import Select from "./elements/Select"
import TextArea from "./elements/TextArea"

const ProductForm: React.FC<ProductFormProps> = ({
  action,
  isOpen,
  setIsOpen,
  displayTitle,
  form,
  titleInput,
  descriptionInput,
  classInput,
  categoryInput,
  brandInput,
  priceInput,
  typInput,
  diameterInput,
  isPublicInput,
  discountInput,
  imagesInput,
  isRecommendedInput,
  isOutOfStockInput,
  handleFormSubmit,
  displayImages,
  handleDeleteImage,
  handleInputImageChange,
  progress,
}) => {
  return (
    <div className="flex relative justify-center items-center h-fit w-full">
      {isOpen ? (
        <InfoModal
          title={
            action == "create"
              ? "Uspešno ste dodali novi proizvod!"
              : `Uspešno ste ažurirali proizvod ${displayTitle}`
          }
          subtitle="Hvala na izdvojenom vremenu"
          closeModal={() => {
            setIsOpen(false)
          }}
          type="update-product"
        />
      ) : null}
      <div className="w-full md:w-10/12 lg:w-2/3 xl:w-1/2 md:mt-5 lg:mt-2 bg-white rounded-lg px-4 py-16 sm:p-4 lg:p-16 md:border-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="text-center">
          <Image className="mx-auto" src="/Montre.png" alt="Leafs" width={100} height={100} />
          <h2 className="mt-6 text-2xl font-bold text-gray-900 uppercase">
            {action == "create" ? "Dodaj novi proizvod" : "Ažuriraj proizvod"}
          </h2>
        </div>
        <form
          ref={form}
          className="mt-8 flex flex-col w-full gap-2"
          encType="multipart/form-data"
          onSubmit={handleFormSubmit}>
          <Input inputRef={titleInput} label="Naslov proizvoda:" name="title" isRequired={true} />
          <Input
            inputRef={priceInput}
            label="Cena proizvoda [RSD]:"
            name="price"
            isRequired={true}
          />
          <Input
            inputRef={discountInput}
            label="Unesi popust [%]:"
            name="discount"
            isRequired={false}
          />
          <Select
            selectRef={classInput}
            label="Klasa proizvoda:"
            name="class"
            isRequired={true}
            options={classOptions}
          />
          <Select
            selectRef={categoryInput}
            label=" Kategorija proizvoda:"
            name="category"
            isRequired={true}
            options={categoryOptions}
          />
          <Select
            selectRef={typInput}
            label="Tip proizvoda:"
            name="typ"
            isRequired={true}
            options={typOptions}
          />
          <Select
            selectRef={brandInput}
            label="Brend:"
            name="brand"
            isRequired={true}
            options={brandOptions}
          />
          <Input inputRef={diameterInput} label="Prečnik [mm]:" name="diameter" isRequired={true} />
          <TextArea
            textAreaRef={descriptionInput}
            label="Opis proizvoda:"
            name="description"
            isRequired={true}
          />
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
                    required={action == "create" ? true : false}
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
                    ? displayImages.map((image: string, idx: number) => {
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
          <Checkbox
            inputRef={isPublicInput}
            label="Proizvod je javno dostupan"
            name="is-public"
            isRequired={false}
          />
          <Checkbox
            inputRef={isRecommendedInput}
            label="Preporučen proizvod"
            name="is-recommended"
            isRequired={false}
          />
          <Checkbox
            inputRef={isOutOfStockInput}
            label="Proizvod je rasprodat"
            name="is-out-of-stock"
            isRequired={false}
          />
          <div className="mt-2">
            <button
              type="submit"
              id="submit-button"
              disabled={progress == 0 ? false : true}
              className="uppercase w-full flex flex-row justify-center items-center py-2 px-4 gap-2 text-white rounded-md">
              {progress == 50 ? (
                <LuLoader2 className="animate-spin h-5 w-5 rounded-full" color="white" size={25} />
              ) : null}
              {action === "create" && progress != 50
                ? "Dodaj proizvod"
                : action === "update" && progress != 50
                ? "Sačuvaj izmene"
                : progress == 50
                ? "Učitava se..."
                : ""}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductForm
