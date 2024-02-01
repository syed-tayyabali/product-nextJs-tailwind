"use client";
import { addProduct } from "@/features/products/actions";
import { useAppDispatch } from "@/store/hooks";
import { products } from "@/types/productsTypes";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddProduct = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [addProductState, setProductState] = useState<products>();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProductState((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    try {
      dispatch(addProduct(addProductState || {}));
      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container mx-auto p-4 text-gray-700">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>

      <form className="">
        <div className="mb-4">
          <label htmlFor="productName" className="block text-sm font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="name"
            value={addProductState?.name || ""}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="productPrice" className="block text-sm font-medium">
            Product Price
          </label>
          <input
            type="number"
            id="productPrice"
            name="price"
            value={addProductState?.price || ""}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            min="0"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="productDescription"
            className="block text-sm font-medium"
          >
            Product Description
          </label>
          <textarea
            id="productDescription"
            name="description"
            value={addProductState?.description || ""}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="productPrice" className="block text-sm font-medium">
            Product Quantity
          </label>
          <input
            type="number"
            id="productQuantity"
            name="quantity"
            value={addProductState?.quantity || ""}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            min="0"
          />
        </div>

        <button
          type="button"
          onClick={handleAddProduct}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
