
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  colors: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isSoldOut?: boolean;
  isOffice?: boolean;
  isSale?: boolean;
  discountPrice?: number;
}

export interface Collection {
  id: string;
  title: string;
  image: string;
  link: string;
}
