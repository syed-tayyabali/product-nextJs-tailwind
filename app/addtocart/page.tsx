"use client";
import {
  handleCartProductQuantity,
  handleRemoveFromCart,
} from "@/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useState } from "react";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const { cart: cartItems } = useAppSelector((state) => state.productsState);

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item?.price * item?.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="container mx-auto p-4 text-black">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-slate-200 p-4 rounded-2xl shadow-2xl"
            >
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">${item.price}</p>
              <div className="flex items-center mb-2">
                <span className="mr-2">Quantity:</span>
                <input
                  type="number"
                  className="border p-2 rounded"
                  value={item.quantity || ""}
                  onChange={(e) =>
                    dispatch(
                      handleCartProductQuantity({
                        id: item?._id,
                        newQuantity: parseInt(e.target.value, 10),
                      })
                    )
                  }
                />
              </div>
              <button
                onClick={() =>
                  dispatch(handleRemoveFromCart({ id: item?._id }))
                }
                className="text-red-500 hover:underline focus:outline-none"
              >
                Remove
              </button>
              <p className="mb-2">
                Subtotal: ${(item?.price * item?.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-4 text-black">
          <p className="text-lg font-semibold">Total: ${calculateTotal()}</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
