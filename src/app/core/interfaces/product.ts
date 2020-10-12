export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  favourite: boolean;
  images: string[];
  sizeChart: string[];
  price: number;
  discountedPrice: number;
  discount: string;
  qty: number;
}
