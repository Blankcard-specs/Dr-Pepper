export interface Product {
  id: string;
  category: 'Outerwear' | 'Knitwear' | 'Shirting' | 'Tailoring' | 'Accessories';
  name: string;
  description: string;
  details: string[];
  materials: string;
  origin: string;
  price: number;
  image: string;
  hoverImage: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
}

export interface StyleLook {
  id: string;
  title: string;
  image: string;
  description: string;
  items: Product[];
}
