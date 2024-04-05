export type Service = {
  id: number;
  name: string;
  description: string;
  category: string;
};

export type CategoriesArray = {
  category: string;
  id: number;
  services: Service[];
}[];
