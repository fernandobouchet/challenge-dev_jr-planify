import { Accordion } from "@components/ui/accordion";
import { sortByCategory } from "@utils/functions";
import services from "@utils/services.json";

const Home = () => {
  const categories = sortByCategory(services.services);

  return (
    <div className="p-5">
      <header>
        <div className="border p-4">
          <h3>Categories</h3>
          <div className="flex flex-col gap-2 mt-2">
            {categories.map((e) => (
              <Accordion key={e.id} id={e.id} title={e.category}></Accordion>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export { Home };
