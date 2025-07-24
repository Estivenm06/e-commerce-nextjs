import "dotenv/config";
import { useEffect, useState } from "react";

import { ProductsType } from "../utils/types";

const STORE = process.env.NEXT_PUBLIC_API;

const useGetProducts = () => {
  const [products, setProducts] = useState<Array<ProductsType>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await fetch(`${STORE}/products`)
        .then(async (response) => {
          if (!response.ok) {
            throw Error("Error fetching products ");
          }
          const data = await response.json();
          setProducts(data);
          setLoading(false);
        })
        .catch((error) => setError(error.message));
    })();
  }, []);

  return { products, loading, error };
};

export { useGetProducts };
