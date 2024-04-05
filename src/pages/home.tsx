import { Accordion } from "@components/ui/accordion";
import { ServiceCard } from "@components/ui/serviceCard";
import { sortByCategory } from "@utils/functions";
import services from "@utils/services.json";

const Home = () => {
  const categories = sortByCategory(services.services);

  return (
    <div className="p-5">
      <header>
        <div className="border border-gray-500 p-4">
          <h3>Categories</h3>
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
      </header>
    </div>
  );
};

export { Home };
