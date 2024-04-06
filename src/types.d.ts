export type Service = {
  id: number;
  name: string;
  description: string;
  category: string;
  appointment?: {
    date: string;
    timeSlot: string;
  };
};

export type CategoriesArray = {
  category: string;
  id: number;
  services: Service[];
}[];

export type SelectionStatus = "CATEGORY" | "TIME" | "CONFIRMATION" | "SAVED";
