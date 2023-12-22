export type ProductProps = {
  id: string;
  src: string[];
  title: string;
  price: number;
  dimensions: string;
  rating: number;
  detail: string;
};

export type RelevantData = {
  _id: string;
  img: string;
  title: string;
  rating: number;
  price: number;
};

export type RelevantProps = {
  data: RelevantData[];
};

export type DetailData = {
  id: string;
  category: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  dimensions: string;
  description: string;
};
