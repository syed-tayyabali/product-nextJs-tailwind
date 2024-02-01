"use client";
import {
  deleteProduct,
  getProductById,
  updateProduct,
} from "@/features/products/actions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { products } from "@/types/productsTypes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  params: {
    productId: number;
  };
};

const EditProduct = ({ params }: Props) => {
  const { productId } = params;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { product } = useAppSelector((state) => state.productsState);
  const [editedProduct, setEditedProduct] = useState<products>();

  useEffect(() => {
    if (productId) dispatch(getProductById(productId));
  }, [productId]);

  useEffect(() => {
    if (product) {
      setEditedProduct({
        ...product,
      });
    }
  }, [product]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    try {
      dispatch(updateProduct(editedProduct || {}));
      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = () => {
    try {
      dispatch(deleteProduct(product?._id));
      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container mx-auto p-4 text-gray-700">
      <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>

      <form className="">
        <div className="mb-4">
          <label htmlFor="productName" className="block text-sm font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="name"
            value={editedProduct?.name || ""}
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
            value={editedProduct?.price || ""}
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
            value={editedProduct?.description || ""}
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
            value={editedProduct?.quantity || ""}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            min="0"
          />
        </div>

        <div className="mx-auto flex flex-col items-center md:flex-row md:items-center lg:flex-row lg:items-center space-x-4">
          <button
            type="button"
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Update Product
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Delete Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
