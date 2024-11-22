"use client";
import { createProduct } from "./actions/products-actions";
import { useRef } from "react";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div>
      <form
        ref={formRef}
        action={async (formData) => {
          const newProduct = await createProduct(formData);
          console.log(newProduct);
          formRef.current?.reset();
        }}
        className="flex flex-col gap-2 justify-center items-center m-auto h-screen w-[400px] "
      >
        <input
          type="text"
          placeholder="name"
          className="border border-gray-300 rounded-md p-2 block w-full"
          name="productName"
        />
        <input
          type="text"
          placeholder="price"
          className="border border-gray-300 rounded-md p-2 block w-full"
          name="productPrice"
        />
        <button className="bg-blue-500 text-white p-2 rounded-md mt-2 block w-full ">
          Save
        </button>
      </form>
    </div>
  );
}
