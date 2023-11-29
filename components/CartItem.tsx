import { CartItemProps } from "@/typescript/interfaces"

const CartItem = ({ title, category, productClass, price, image }: CartItemProps) => {
  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start relative">
      <input type="checkbox" className="absolute top-0 left-0 w-6 h-6 cursor-pointer" />
      <img src={image} alt="product-image" className="w-full rounded-lg sm:w-40" />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="mt-1 text-lg text-gray-700">{category == "man" ? "Muški" : "Ženski"}</p>
          <p className="mt-1 text-lg text-gray-700">{productClass}</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-200">
            <button className="cursor-pointer text-xl rounded-l bg-gray-100 py-[2px] px-3.5 duration-100 hover:bg-amber-500 hover:text-amber-50">
              -
            </button>
            <span className="h-8 w-8 border text-xl bg-white text-center outline-none">0</span>
            <button className="cursor-pointer text-xl rounded-r bg-gray-100 py-[2px] px-3 duration-100 hover:bg-amber-500 hover:text-amber-50">
              +
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-md">{price} RSD</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
