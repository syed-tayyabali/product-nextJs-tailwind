import { products } from "@/types/productsTypes";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  products: products[];
};

const ProductListing = ({ products }: Props) => {
  const router = useRouter();

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-5 mt-5">
      {products.map((product: products, index: number) => (
        <div key={index} className="bg-slate-200 p-5 shadow-2xl rounded-xl">
          <div className="mx-auto flex flex-col items-center">
            <Image
              src="/me.PNG"
              width={200}
              height={200}
              alt="Picture of the author"
              className="rounded-2xl"
            />
          </div>
          <h3 className="text-lg font-semibold text-black">{product.name}</h3>
          <p className="text-gray-600">${product.price}</p>
          <div className="mx-auto flex flex-col items-center md:flex-row md:items-center lg:flex-row lg:items-center space-x-4">
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={(e) => router.push(`/productdetail/${product._id}`)}
            >
              View Product
            </button>

            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={(e) => router.push(`/editproduct/${product._id}`)}
            >
              Edit Product
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
