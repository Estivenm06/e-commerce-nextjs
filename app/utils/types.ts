export type ProductsType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type ProductType = {
  product: ProductsType;
};

export type StoreContextType = {
  products: ProductsType[];
  loading: boolean;
  error: string | null;
};
