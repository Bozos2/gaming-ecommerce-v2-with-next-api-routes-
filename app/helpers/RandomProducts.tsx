import { Document } from "mongodb";

export const getRandomProducts = (
  allProducts: Document[],
  excludeCategory: string,
  excludeId: string,
  count: number
) => {
  const filteredProducts = allProducts.filter(
    (item) => item.category !== excludeCategory && item._id !== excludeId
  );

  const randomProducts = [];

  while (randomProducts.length < count && filteredProducts.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredProducts.length);
    randomProducts.push(filteredProducts.splice(randomIndex, 1)[0]);
  }

  return randomProducts;
};
