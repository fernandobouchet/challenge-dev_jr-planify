import { Accordion } from "@components/ui/accordion";
import { ServiceCard } from "@components/categories/serviceCard";
import { AccordionItem } from "@components/ui/accordionItem";
import { sortByCategory } from "@utils/functions";
import services from "@utils/services.json";
import { useState } from "react";

const CategoriesSelectorWrapper = () => {
  const categories = sortByCategory(services.services);

  const [openId, setOpenId] = useState<null | number>(null);

  const toggleAccordion = (accordionItemId: number) => {
    if (accordionItemId !== openId) {
      setOpenId(accordionItemId);
    } else {
      setOpenId(null);
    }
  };

  return (
    <section className="p-5 overflow-y-auto">
      <Accordion title={"Categories"}>
        {categories.map((e) => (
          <AccordionItem
            key={e.id}
            id={e.id}
            title={e.category}
            openId={openId}
            onClick={() => toggleAccordion(e.id)}
          >
            {e.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export { CategoriesSelectorWrapper };
