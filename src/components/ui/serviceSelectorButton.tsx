import { useUserServices } from "@hooks/useUserServices";
import { Service } from "@types";

interface Props {
  service: Service;
}

const ServiceSelectorButton = ({ service }: Props) => {
  const { currentService, toggleSelectedService } = useUserServices();

  return (
    <button
      className={`bg-gray-500 text-white p-1 ml-auto ${
        currentService?.id === service.id ? "bg-gray-600" : ""
      }`}
      onClick={() => toggleSelectedService(service)}
    >
      {currentService?.id === service.id ? "Seleccionado" : "Seleccionar"}
    </button>
  );
};

export default ServiceSelectorButton;
