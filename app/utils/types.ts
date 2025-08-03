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

export type UserType = {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
};

export type User = {
  id: number
  username: string;
  password: string;
};

export type Cart = {
  username: string;
  products: {
    productId: number;
    quantity: number;
  }[];
}

export type StoreContextType = {
  // Product and categories
  categories: string[];
  products: ProductsType[];
  principalProduct: ProductsType;
  loading: boolean;
  
  // Authentication
  user: string | null;
  logout: () => void;
  token: string | null;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  users: User[];
  LoginUser: ({ username, password }: { username: string; password: string }) => void;

  // Filtering
  filter: { category: string; rating: number };
  handleFilterChange: (value: string | number) => void;
  onGoFilter: () => void;
  filteredProducts: ProductsType[];

  // Cart
  cart: Cart | null; 
  dispatch: React.Dispatch<{ type: string; payload?: any }>;

  // Alert
  alert: AlertType;
  showAlert: (alert: AlertType) => void;
};

export type PaginationProps = {
  page: number;
  pages: number;
  setPage: (page: number) => void;
};

export type AlertType = {
  message: string;
  type: "warning" | "error" | "success";
} | null;
