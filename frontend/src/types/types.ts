 export interface Categorie {
    id: string;
    name: string;
    description: string;
    product: Product[]
  }

  export interface Product {
    image: string;
    name: string;
    price: number;
    isFavorite: boolean;
    description: string;
    category: string
}

export interface FormData {
    name: string;
    description: string;
    image: string;
    price: string;
    categoryId: string;
}