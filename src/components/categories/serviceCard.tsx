import { Service } from "@types";
import { ServiceSelectorButton } from "@components/categories/serviceSelectorButton";

interface Props {
  service: Service;
}

const ServiceCard = ({ service }: Props) => {
  return (
    <div className="flex flex-col border-2 border-gray-300 p-2">
      <h4>{service.name}</h4>
      <p className="pb-2">{service.description}</p>
      <ServiceSelectorButton service={service} />
    </div>
  );
};

export { ServiceCard };
