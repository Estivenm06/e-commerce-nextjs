import "dotenv/config";
import { useEffect, useState } from "react";

import type { ProductsType, AlertType } from "../utils/types";

const API_URL = process.env.NEXT_PUBLIC_API;

const useGetProducts = (showAlert: (alert: AlertType) => void) => {
  const [products, setProducts] = useState<Array<ProductsType>>([]);
  const [categories, setCategories] = useState<Array<string> | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getCategories = (products: Array<ProductsType>) => {
    const uniqueCategories = new Set(
      products.map((product) => product.category)
    );
    setCategories([...uniqueCategories]);
  };

  useEffect(() => {
    (async () => {
      await fetch(`${API_URL}/products`)
        .then(async (response) => {
          if (!response.ok) {
            throw Error("Error fetching products ");
          }
          const data: Array<ProductsType> = await response.json();
          if (data.length <= 0) {
            throw Error("No products found");
          }
          setProducts(data);
          getCategories(data);
          setLoading(false);
        })
        .catch((error) => showAlert({ message: error.message, type: "error" }));
    })();
  }, [ showAlert ]);
  
  return {
    categories,
    loading,
    principalProduct: products[0],
    products,
  };
};

export { useGetProducts };
