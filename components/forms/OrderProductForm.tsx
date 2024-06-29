import { SHIPPING_COST } from "@/constants"
import { OrderProductFormProps } from "@/typescript/interfaces"
import Image from "next/image"
import { Suspense } from "react"
import { LuLoader2 } from "react-icons/lu"
import Input from "./elements/Input"
import Label from "./elements/Label"
import TextArea from "./elements/TextArea"

const OrderProductForm: React.FC<OrderProductFormProps> = ({
  type,
  product,
  cartItems,
  fullNameInput,
  emailInput,
  phoneInput,
  addressInput,
  cityInput,
  zipCodeInput,
  noteInput,
  handleOrder,
  total,
  progress,
  initialCustomerData,
}) => {
  const amount: number = total - SHIPPING_COST
  return (
    <div className="flex items-center justify-center" id="order">
      <div className="flex justify-center items-center lg:py-10 w-full">
        <div className="w-full md:w-10/12 lg:w-2/3 xl:w-1/2 md:mt-5 lg:mt-2 bg-white block rounded-lg px-4 py-16 sm:p-4 lg:p-16 md:border-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div className="text-center">
            <Image
              className="mx-auto"
              src="/Montre.png"
              alt="Montre satovi"
              width={100}
              height={100}
            />
          </div>
          <form
            className="mt-8 flex flex-col w-full gap-2"
            encType="multipart/Order-data"
            onSubmit={handleOrder}>
            <Input
              inputRef={fullNameInput}
              label="Ime i prezime:"
              name="fullName"
              isRequired={true}
              defaultValue={initialCustomerData?.fullName}
              placeholder="Npr. Nikola Jovanović"
            />
            <Input
              inputRef={emailInput}
              label="Email:"
              name="email"
              type="email"
              isRequired={true}
              defaultValue={initialCustomerData?.email}
              placeholder="Npr. nikolajovanovic@gmail.com"
            />
            <Input
              inputRef={phoneInput}
              label="Broj telefona:"
              name="phone"
              isRequired={true}
              defaultValue={initialCustomerData?.phone}
              placeholder="Npr. +3816xxxxxxxx"
            />
            <Input
              inputRef={addressInput}
              label="Adresa (opština, ulica i broj):"
              name="address"
              isRequired={true}
              defaultValue={initialCustomerData?.address}
              placeholder="Npr. Čukarica, Požeška 5"
            />
            <Input
              inputRef={cityInput}
              label="Grad:"
              name="city"
              isRequired={true}
              defaultValue={initialCustomerData?.city}
              placeholder="Npr. Beograd"
            />
            <Input
              inputRef={zipCodeInput}
              label="Poštanski broj:"
              name="zip-code"
              isRequired={true}
              defaultValue={initialCustomerData?.zipCode}
              placeholder="Npr. 11070"
            />
            <TextArea textAreaRef={noteInput} label="Napomena:" name="note" isRequired={false} />
            <div>
              <label
                htmlFor="image-upload"
                className="block text-base font-medium leading-5 text-gray-700">
                Izabrani proizvodi:
              </label>
              {type == "single-item" ? (
                <div className="mt-2">
                  <div className="flex flex-col w-full gap-2">
                    <div
                      className={`flex flex-row flex-wrap gap-2 items-center justify-start px-10 w-full min-h-[10rem] h-fit py-6 md:border md:border-gray-300 rounded-lg bg-white`}>
                      <div className="relative h-64 w-10/12 sm:w-52 ">
                        <h2 className="absolute bottom-0 right-0 text-center text-md text-white bg-amber-500 z-10 w-full">
                          {product!.title}
                        </h2>
                        <Image
                          src={product!.images[0]}
                          fill
                          priority
                          className="object-cover object-center rounded-lg"
                          alt="Input Picture"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-2">
                  <div className="flex flex-col w-full gap-2">
                    <div
                      className={`flex flex-row flex-wrap gap-2 items-center justify-start px-10 w-full min-h-[10rem] h-fit py-6 md:border md:border-gray-300 rounded-lg bg-white`}>
                      {cartItems
                        ? cartItems?.map((product: any, idx: number) => {
                          return (
                            <Suspense fallback="" key={idx}>
                              <div className="relative h-64 w-10/12 sm:w-52 ">
                                <h2 className="absolute bottom-0 right-0 text-center text-sm text-white bg-amber-500 z-10 w-full">
                                  {product.quantity}x{product.title}
                                </h2>
                                <Image
                                  src={product.images[0]}
                                  fill
                                  priority
                                  className="object-cover object-center rounded-lg"
                                  alt="Input Picture"
                                />
                              </div>
                            </Suspense>
                          )
                        })
                        : null}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Label
              title="Iznos narudžbine:"
              value={`${amount!.toLocaleString().replace(",", ".")},00 RSD`}
            />
            <Label
              title="Cena poštarine:"
              value={`${SHIPPING_COST!.toLocaleString().replace(",", ".")},00 RSD`}
            />
            <Label
              title="Ukupan iznos:"
              value={`${total!.toLocaleString().replace(",", ".")},00 RSD`}
            />
            <Label
              title="Napomena:"
              value="Vaša narudžbina će biti dostavljena za 1-3 radna dana i plaća se pouzećem."
            />
            <div className="mt-2">
              <button
                type="submit"
                id="submit-button"
                disabled={progress == 0 ? false : true}
                className={`uppercase w-full flex flex-row justify-center items-center py-2 px-4 gap-2 text-white rounded-md ${progress == 100 && "!bg-green-600"
                  }`}>
                {progress == 50 ? (
                  <LuLoader2
                    className="animate-spin h-5 w-5 rounded-full"
                    color="white"
                    size={25}
                  />
                ) : null}
                {progress == 100 ? "Naručeno" : progress == 50 ? "Učitava se" : "Naruči"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OrderProductForm
