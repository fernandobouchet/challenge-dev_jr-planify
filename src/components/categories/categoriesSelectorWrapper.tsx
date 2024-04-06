import { CategoriesArray } from "@types";
import { Accordion } from "@components/ui/accordion";
import { ServiceCard } from "@components/categories/serviceCard";

interface Props {
  categories: CategoriesArray;
}

const CategoriesSelectorWrapper = ({ categories }: Props) => {
  return (
    <section className="p-5">
      <div className="border border-gray-500 p-4">
        <h2>Categories</h2>
        <div className="flex flex-col gap-2 mt-2">
          {categories.map((e) => (
            <Accordion key={e.id} id={e.id} title={e.category}>
              {e.services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSelectorWrapper;
