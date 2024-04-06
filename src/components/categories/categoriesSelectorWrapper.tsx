import { CategoriesArray } from "@types";
import { Accordion } from "@components/ui/accordion";
import { ServiceCard } from "@components/categories/serviceCard";
import { AccordionItem } from "@components/ui/accordionItem";
import { useState } from "react";

interface Props {
  categories: CategoriesArray;
}

const CategoriesSelectorWrapper = ({ categories }: Props) => {
  const [openId, setOpenId] = useState<null | number>(null);

  const toggleAccordion = (accordionItemId: number) => {
    if (accordionItemId !== openId) {
      setOpenId(accordionItemId);
    } else {
      setOpenId(null);
    }
  };

  return (
    <section className="p-5">
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

export default CategoriesSelectorWrapper;
