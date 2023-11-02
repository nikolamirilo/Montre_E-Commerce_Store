import React from "react";

const Filters = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-3 w-full">
      <div className="flex flex-col">
        <label htmlFor="brand">Brend:</label>
        <select
          id="brand"
          name="brand"
          className="w-full h-10 border-2 border-amber-500 focus:outline-none focus:border-amber-500 rounded-lg cursor-pointer px-2 md:px-3 py-0 md:py-1 tracking-wider text-gray-900"
        >
          <option value="Curren">Curren</option>
          <option value="Lige">Lige</option>
          <option value="Naviforce">Naviforce</option>
          <option value="Benyar">Benyar</option>
          <option value="Hannah Martin">Hannah Martin</option>
          <option value="Geneva">Geneva</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="brand">Tip:</label>
        <select
          id="type"
          name="type"
          className="w-full h-10 border-2 border-amber-500 focus:outline-none focus:border-amber-500 rounded-lg cursor-pointer px-2 md:px-3 py-0 md:py-1 tracking-wider text-gray-900"
        >
          <option value="Man">Muški</option>
          <option value="Woman">Ženski</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="category">Kategorija:</label>
        <select
          id="category"
          name="category"
          className="w-full h-10 border-2 border-amber-500 focus:outline-none focus:border-amber-500 rounded-lg cursor-pointer px-2 md:px-3 py-0 md:py-1 tracking-wider text-gray-900"
        >
          <option value="Lux">Lux</option>
          <option value="Mid">Mid</option>
          <option value="Casual">Casual</option>
          <option value="Sport">Sport</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="min-price">Minimalna cena:</label>
        <input
          id="min-price"
          name="max-price"
          type="text"
          placeholder="RSD"
          className="w-full h-10 border-2 border-amber-500 focus:outline-none focus:border-amber-500 rounded-lg px-2 md:px-3 py-0 md:py-1 tracking-wider text-gray-900"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="max-price">Maksimalna cena:</label>
        <input
          id="max-price"
          name="max-price"
          placeholder="RSD"
          type="text"
          className="w-full h-10 border-2 border-amber-500 focus:outline-none focus:border-amber-500 rounded-lg px-2 md:px-3 py-0 md:py-1 tracking-wider text-gray-900"
        />
      </div>
    </div>
  );
};

export default Filters;
