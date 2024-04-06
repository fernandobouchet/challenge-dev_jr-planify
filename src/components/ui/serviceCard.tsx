import { Service } from "@types";
import ServiceSelectorButton from "./serviceSelectorButton";

interface Props {
  service: Service;
}

const ServiceCard = ({ service }: Props) => {
  return (
    <div className="flex flex-col border border-gray-500 p-2">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <ServiceSelectorButton service={service} />
    </div>
  );
};

export { ServiceCard };
