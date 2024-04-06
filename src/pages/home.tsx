import { Accordion } from "@components/ui/accordion";
import { Button } from "@components/ui/button";
import { ServiceCard } from "@components/ui/serviceCard";
import { useUserServices } from "@hooks/useUserServices";
import { sortByCategory } from "@utils/functions";
import services from "@utils/services.json";

const Home = () => {
  const categories = sortByCategory(services.services);
  const { currentService } = useUserServices();

  return (
    <main>
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
