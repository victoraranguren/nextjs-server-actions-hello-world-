"use server";
import { randomUUID } from "crypto";

export const createProduct = async (formData: FormData) => {
  const productName = await formData.get("productName");
  const productPrice = await formData.get("productPrice");

  if (!productName || !productPrice) return;

  const newProduct = await {
    name: productName,
    id: randomUUID(),
    price: productPrice,
  };

  console.log(newProduct);

  return newProduct;
};
