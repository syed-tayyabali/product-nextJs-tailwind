"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const path = usePathname()
    .split("/")
    .filter((p) => p !== "")
    .shift();

  return (
    <header className="bg-blue-500 p-4 ">
      <div className="container mx-auto flex flex-col items-center lg:flex-row lg:items-center justify-between">
        <div
          className="text-white flex flex-row mb-4 lg:mb-0 lg:mr-4 items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/me.PNG"
            width={50}
            height={50}
            alt="Picture of the author"
            className="rounded-2xl"
          />
          <span className="ml-2 text-xl font-semibold">Products</span>
        </div>

        <div className="flex space-x-4">
          <button
            className={`text-white px-4 py-2 ${
              path === "addtocart" ? "bg-blue-600" : ""
            } rounded focus:outline-none focus:ring focus:border-blue-300`}
            onClick={(e) => router.push(`/addtocart`)}
          >
            View Cart
          </button>
          <button
            className={`text-white px-4 py-2 ${
              path === "addproduct" ? "bg-blue-600" : ""
            } rounded focus:outline-none focus:ring focus:border-blue-300`}
            onClick={(e) => router.push(`/addproduct`)}
          >
            Add Product
          </button>
          <button
            className={`text-white px-4 py-2 ${
              path === "dashboard" ? "bg-blue-600" : ""
            } rounded focus:outline-none focus:ring focus:border-blue-300`}
            onClick={(e) => router.push(`/dashboard`)}
          >
            Dashboard
          </button>
        </div>
      </div>
    </header>
  );
}
