import { CategoriesArray, Service } from "@types";

const sortByCategory = (data: Service[]) => {
  const categories: CategoriesArray = [];

  data.map((service, _index) => {
    const existingCategory = categories.find(
      (item) => item.category === service.category
    );
    if (existingCategory) {
      existingCategory.services.push(service);
    } else {
      categories.push({
        id: _index,
        category: service.category,
        services: [service],
      });
    }
  });

  return categories;
};

export { sortByCategory };
