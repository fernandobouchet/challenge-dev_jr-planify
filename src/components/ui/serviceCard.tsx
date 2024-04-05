import { Service } from "@types";

interface Props {
  service: Service;
}

const ServiceCard = ({ service }: Props) => {
  return (
    <div className="flex flex-col border border-gray-500 p-2">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <button className="bg-gray-500 text-white p-1 ml-auto">
        Seleccionar
      </button>
    </div>
  );
};

export { ServiceCard };
