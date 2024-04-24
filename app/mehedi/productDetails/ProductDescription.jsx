import { FaMinus, FaPlus } from "react-icons/fa";

const ProductDescription = () => {

  return (
    <div className="flex flex-col gap-5">

      <h2 className="font-semibold text-xl">Srehenderit Dolore</h2>

      <div className="flex items-center gap-3">
        <h1 className="text-red-500 text-2xl">$710.00</h1>
        <p className="text-sm line-through text-gray-500">$725.00</p>
        <span className="bg-red-500 p-1">-20%</span>
      </div>

      <div className="text-gray-500 flex flex-col gap-3 text-sm font-medium">
        <span>Brand: HTC</span>
        <span>Product Code: d8</span>
        <span>Stock: In Stock</span>
      </div>

      <div className="text-gray-500 flex flex-col gap-3">
        <h1 className="font-semibold">AVAILABLE OPTIONS</h1>
        <div>
          <label for="countries" className="before:content-['*'] before:text-red-500 text-sm">Select</label>
          <select id="countries" class=" text-gray-900 text-xs block py-2 bg-gray-200 w-52 outline-none rounded">
            <option selected>--- Please Select ---</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>

      <div className="text-gray-500 flex flex-col gap-1">
        <h1>Qty</h1>
        <div className="flex items-center">
          <FaMinus className="p-2 bg-gray-100 text-3xl border"/>
          <span className="px-4 py-1">1</span>
          <FaPlus className="p-2 bg-gray-100 text-3xl border"/>
        </div>
      </div>

      <div className="flex gap-5">
        <button className="bg-red-500 px-10 py-2 text-white font-semibold text-sm">ADD TO CART</button>
        <button className="bg-red-500 px-10 py-2 text-white font-semibold text-sm">BUY NOW</button>
      </div>
    </div>
  );
};

export default ProductDescription;