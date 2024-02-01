"use client";
import ProductListing from "@/components/ProductListing/page";
import { getAllProducts } from "@/features/products/actions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.productsState);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <main>
      <ProductListing products={products} />
    </main>
  );
}
