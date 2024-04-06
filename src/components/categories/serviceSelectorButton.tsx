import { useUserServices } from "@hooks/useUserServices";
import { Service } from "@types";
import { Button } from "@components/ui/button";

interface Props {
  service: Service;
}

const ServiceSelectorButton = ({ service }: Props) => {
  const { currentService, toggleSelectedService } = useUserServices();

  const handleOnClick = () => {
    toggleSelectedService(service);
  };

  return (
    <Button
      className={`ml-auto ${
        currentService?.id !== service.id && "!bg-slate-500 hover:!bg-slate-600"
      }`}
      onClick={handleOnClick}
    >
      {currentService?.id === service.id ? "Selected" : "Select"}
    </Button>
  );
};

export { ServiceSelectorButton };
