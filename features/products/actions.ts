import { products } from "@/types/productsTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
  "products/getAllproducts",
  async () => {
    try {
      const resp = await fetch("http://localhost:4000/products");
      const respData = await resp.json();
      return respData;
    } catch (err) {
      console.error(err);
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id: number) => {
    try {
      const resp = await fetch(`http://localhost:4000/products/${id}`);
      const respData = await resp.json();
      return respData;
    } catch (err) {
      console.error(err);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (data: products) => {
    try {
      const resp = await fetch(`http://localhost:4000/products`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      });
      const respData = await resp.json();
      return respData;
    } catch (err) {
      console.error(err);
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (data: products) => {
    try {
      const resp = await fetch(`http://localhost:4000/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      });
      const respData = await resp.json();
      return respData;
    } catch (err) {
      console.error(err);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id: number) => {
    try {
      const resp = await fetch(`http://localhost:4000/products/${id}`, {
        method: "DELETE",
      });
      const respData = await resp.json();
      return respData;
    } catch (err) {
      console.error(err);
    }
  }
);
