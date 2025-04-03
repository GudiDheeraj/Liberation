// Sample database of American products and their alternatives
export interface Product {
  name: string;
  isAmerican: boolean;
  alternatives?: string[];
}

export const products: Product[] = [
  {
    name: "Levi's Jeans",
    isAmerican: true,
    alternatives: ["Uniqlo Jeans", "Zara Jeans", "H&M Jeans"]
  },
  {
    name: "Nike Shoes",
    isAmerican: true,
    alternatives: ["Adidas", "Puma", "New Balance"]
  },
  {
    name: "Apple iPhone",
    isAmerican: true,
    alternatives: ["Samsung Galaxy", "Xiaomi", "OnePlus"]
  },
  {
    name: "Ford Cars",
    isAmerican: true,
    alternatives: ["Toyota", "Honda", "Volkswagen"]
  }
];