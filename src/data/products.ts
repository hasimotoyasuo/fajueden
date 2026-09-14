export interface Product {
  id: string;
  name: string;
  category:
    | "vegetable"
    | "fruit"
    | "mushroom"
    | "livestock"
    | "fish";
  description: string;
  price?: string;
  available: boolean;
  whatsappMessage: string;
}

export const products: Product[] = [
  {
    id: "strawberry",
    name: "Sweet Strawberries",
    category: "fruit",
    description:
      "Organically grown strawberries, hand-picked fresh from our garden.",
    available: true,
    whatsappMessage:
      "Hello! I'd like to order Sweet Strawberries from Faju Eden.",
  },
  {
    id: "oyster-mushroom",
    name: "Fresh Oyster Mushrooms",
    category: "mushroom",
    description:
      "Freshly harvested oyster mushrooms grown in our mushroom hut.",
    available: true,
    whatsappMessage:
      "Hello! I'd like to order Fresh Oyster Mushrooms from Faju Eden.",
  },
  {
    id: "vegetables",
    name: "Organic Vegetables",
    category: "vegetable",
    description:
      "Seasonal organic vegetables grown in our kitchen garden using vermicompost.",
    available: true,
    whatsappMessage:
      "Hello! I'd like to order Organic Vegetables from Faju Eden.",
  },
  {
    id: "fish",
    name: "Fresh Fish",
    category: "fish",
    description: "Sustainably raised fish from our on-farm fish pond.",
    available: true,
    whatsappMessage: "Hello! I'd like to order Fresh Fish from Faju Eden.",
  },
];
