"use client"
import { handleProductChange, uploadImagesToCloudinary } from "@/actions/client/products"
import { generateStringCode, reindexProductImageArray } from "@/helpers/client"
import { revalidateData } from "@/helpers/server"
import { EditProductProps } from "@/typescript/interfaces"
import { Product, ProductImage } from "@/typescript/types"
import React, { useEffect, useRef, useState } from "react"
import ProductForm from "../forms/ProductForm"

const EditProduct: React.FC<EditProductProps> = ({ initialData }) => {
  const [id, setId] = useState<string>("")
  const [progress, setProgress] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [displayTitle, setDisplayTitle] = useState<string>("")
  const [images, setImages] = useState<ProductImage[]>([])
  const form = useRef<HTMLFormElement>(null)
  const titleInput = useRef<HTMLInputElement>(null)
  const descriptionInput = useRef<HTMLTextAreaElement>(null)
  const classInput = useRef<HTMLSelectElement>(null)
  const categoryInput = useRef<HTMLSelectElement>(null)
  const brandInput = useRef<HTMLSelectElement>(null)
  const priceInput = useRef<HTMLInputElement>(null)
  const typInput = useRef<HTMLSelectElement>(null)
  const diameterInput = useRef<HTMLInputElement>(null)
  const isPublicInput = useRef<HTMLInputElement>(null)
  const discountInput = useRef<HTMLInputElement>(null)
  const imagesInput = useRef<HTMLInputElement>(null)
  const isRecommendedInput = useRef<HTMLInputElement>(null)
  const isOutOfStockInput = useRef<HTMLInputElement>(null)
  var productCode: string = ""

  async function handleInputImageChange() {
    const files = imagesInput?.current?.files
    if (files) {
      const newImages = await Promise.all(
        Array.from(files).map((file, index) => {
          return new Promise<{ url: string; order: number }>((resolve) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
              resolve({
                url: reader.result as string,
                order: index,
              })
            }
          })
        })
      )

      setImages((prevImages: any) => [
        ...prevImages,
        ...newImages.map((image, idx) => ({
          ...image,
          order: prevImages.length + idx,
        })),
      ])
    }
  }

  function handleDeleteImage(index: number) {
    setImages((prevImages) => {
      const newImages = [...prevImages]
      newImages.splice(index, 1)
      const newArray = reindexProductImageArray(newImages)
      return newArray
    })
  }
  function resetForm() {
    form.current!.reset()
    setImages([])
    setProgress(100)
    setIsOpen(true)
  }

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      setProgress(50)
      const files = imagesInput?.current?.files
      // Checks for files
      if (files) {
        await uploadImagesToCloudinary(files, images)
      }
      // Calculations of discounts
      const price = parseInt(priceInput.current!.value)
      const discount = parseInt(discountInput.current!.value)
      const discountedPrice =
        discount > 0 ? Math.floor((price * (1 - discount / 100)) / 100) * 100 : price
      console.log(discountedPrice)
      // Generate productCode
      productCode = generateStringCode(titleInput.current!.value)
      setDisplayTitle(titleInput.current!.value)
      // Prepare upload data
      const filteredImages: ProductImage[] = images.filter(
        (image: ProductImage) => !image.url.includes("data:image/")
      )
      const reindexedImages = reindexProductImageArray(filteredImages)
      const uploadData: Product = {
        title: titleInput.current!.value,
        price,
        productCode,
        class: classInput.current!.value,
        diameter: diameterInput.current!.value,
        typ: typInput.current!.value,
        category: categoryInput.current!.value,
        brand: brandInput.current!.value,
        description: descriptionInput.current!.value,
        isPublic: isPublicInput.current!.checked,
        isRecommended: isRecommendedInput.current!.checked,
        isOutOfStock: isOutOfStockInput.current!.checked,
        discount,
        discountedPrice,
        isOnDiscount: discount > 0,
        images: reindexedImages,
      }
      // Send POST request to create new product or update existing one and reset form
      await handleProductChange(images, uploadData, "update", id)
      revalidateData()
      resetForm()
    } catch (error) {
      console.log(error)
    }
  }
  function handleChangeOrderOfImages(images: ProductImage[], mainIndex: number) {
    setImages((prevImages) => {
      const newImages = [...prevImages]
      const temp = newImages[0]
      newImages[0] = newImages[mainIndex]
      newImages[mainIndex] = temp
      return reindexProductImageArray(newImages)
    })
  }

  //Set initial Values in case I want to edit product
  useEffect(() => {
    if (initialData) {
      setId(initialData._id)
      titleInput.current!.value = initialData.title
      priceInput.current!.value = initialData.price
      classInput.current!.value = initialData.class
      diameterInput.current!.value = initialData.diameter
      typInput.current!.value = initialData.typ
      categoryInput.current!.value = initialData.category
      descriptionInput.current!.value = initialData.description
      isPublicInput.current!.checked = initialData.isPublic
      discountInput.current!.value = initialData.discount
      brandInput.current!.value = initialData.brand
      isRecommendedInput.current!.checked = initialData.isRecommended
      isOutOfStockInput.current!.checked = initialData.isOutOfStock
      productCode = initialData.productCode
      setImages(initialData.images)
    }
  }, [initialData])
  return (
    <ProductForm
      action="update"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      displayTitle={displayTitle}
      form={form}
      titleInput={titleInput}
      descriptionInput={descriptionInput}
      classInput={classInput}
      categoryInput={categoryInput}
      brandInput={brandInput}
      priceInput={priceInput}
      typInput={typInput}
      diameterInput={diameterInput}
      isPublicInput={isPublicInput}
      discountInput={discountInput}
      imagesInput={imagesInput}
      isRecommendedInput={isRecommendedInput}
      isOutOfStockInput={isOutOfStockInput}
      handleFormSubmit={handleFormSubmit}
      displayImages={images}
      handleDeleteImage={handleDeleteImage}
      handleInputImageChange={handleInputImageChange}
      handleChangeOrderOfImages={handleChangeOrderOfImages}
      progress={progress}
    />
  )
}

export default EditProduct
