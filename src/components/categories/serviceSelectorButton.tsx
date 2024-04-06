import { useUserServices } from "@hooks/useUserServices";
import { Service } from "@types";
import { Button } from "@components/ui/button";

interface Props {
  service: Service;
}

const ServiceSelectorButton = ({ service }: Props) => {
  const { currentService, toggleSelectedService } = useUserServices();

  return (
    <Button
      className={`ml-auto ${
        currentService?.id === service.id ? "bg-gray-600 hover:bg-gray-500" : ""
      }`}
      onClick={() => toggleSelectedService(service)}
    >
      {currentService?.id === service.id ? "Selected" : "Select"}
    </Button>
  );
};

export { ServiceSelectorButton };
