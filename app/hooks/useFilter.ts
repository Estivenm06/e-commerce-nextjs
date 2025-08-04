import { useEffect, useState } from "react";
import type { AlertType, ProductsType } from "../utils/types";

const useFilter = (
  products: ProductsType[],
  showAlert: (alert: AlertType) => void
) => {
  const [filter, setFilter] = useState({
    category: "All Categories",
    rating: 5,
  });
  const [filteredProducts, setFilteredProducts] =
    useState<Array<ProductsType>>([]);

  useEffect(() => {
    if (products.length > 0) {
      setFilteredProducts(() => [...products]);
    }
  }, [products]);

  const handleFilterChange = (value: string | number) => {
    if (typeof value === "number") {
      setFilter((prev) => ({ ...prev, rating: value }));
    } else {
      setFilter((prev) => ({ ...prev, category: value }));
    }
  };

  const onGoFilter = () => {
    if (filter.category === "All Categories" && filter.rating === 5) {
      setFilteredProducts(() => [...products]);
    } else {
      const filtered = products.filter(
        (product) =>
          (product.category === filter.category &&
            product.rating.rate <= filter.rating) ||
          (filter.category === "All Categories" &&
            product.rating.rate <= filter.rating) ||
          (product.category === filter.category && filter.rating === 5)
      );

      setFilteredProducts(filtered);
      if (filtered.length <= 0) {
        showAlert({
          message: "No products found for the selected filter",
          type: "warning",
        });
      }
    }
  };
  return {
    filter,
    filteredProducts,
    handleFilterChange,
    onGoFilter,
    setFilteredProducts,
  };
};

export { useFilter };
