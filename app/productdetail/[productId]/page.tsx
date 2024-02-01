"use client";
import { getProductById } from "@/features/products/actions";
import { addToCart } from "@/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { products } from "@/types/productsTypes";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  params: {
    productId: number;
  };
};

const ProductDetail = ({ params }: Props) => {
  const { productId } = params;
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.productsState);
  const [productQuantity, setProductQuantity] = useState<products>();

  useEffect(() => {
    if (productId) dispatch(getProductById(productId));
  }, [productId]);

  useEffect(() => {
    if (product) {
      setProductQuantity({
        ...product,
      });
    }
  }, [product]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProductQuantity((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div className="bg-slate-200 container mx-auto mt-8 p-4 shadow-2xl rounded-2xl">
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2">
          <Image
            src="/me.PNG"
            width={200}
            height={200}
            alt="Picture of the author"
            className="rounded-2xl"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 md:ml-8">
          <h2 className="text-2xl font-semibold mb-2 text-black">
            {product?.name}
          </h2>
          <p className="text-gray-600 mb-4">${product?.price}</p>
          <p className="mb-4 text-black">{product?.description}</p>
          <div className="flex items-center mb-4 text-black">
            <span className="mr-2">Quantity:</span>
            <select
              className="border p-2 rounded"
              value={productQuantity?.quantity || ""}
              name="quantity"
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5].map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={() => dispatch(addToCart(productQuantity))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
