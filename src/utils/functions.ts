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

const formatDateToLocal = (dateString: string) => {
  const parts = dateString.split("-");
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]) - 1;
  const day = parseInt(parts[2]);

  const date = new Date(year, month, day);

  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

const formatDateToText = (dateString: string) => {
  const parts = dateString.split("/");
  const day = parseInt(parts[0]);
  const month = parseInt(parts[1]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = months[month - 1];

  return `${day} of ${monthName}`;
};

export { sortByCategory, formatDateToLocal, formatDateToText };
