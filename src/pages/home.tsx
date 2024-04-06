import CategoriesSelectorWrapper from "@components/categories/categoriesSelectorWrapper";
import { Button } from "@components/ui/button";
import { useUserServices } from "@hooks/useUserServices";
import { sortByCategory } from "@utils/functions";
import services from "@utils/services.json";

const Home = () => {
  const categories = sortByCategory(services.services);
  const { currentService } = useUserServices();

  return (
    <main>
      <CategoriesSelectorWrapper categories={categories} />
      {currentService && (
        <section className="flex mt-5 p-5 border border-gray-500">
          <div className="ml-auto">
            <Button>Next</Button>
          </div>
        </section>
      )}
    </main>
  );
};

export { Home };
