import { Button } from "@components/ui/button";
import { useUserServices } from "@hooks/useUserServices";
import { Service } from "@types";

interface Props {
  service: Service;
}

const AppointmentsCard = ({ service }: Props) => {
  const { deleteSavedAppointment } = useUserServices();

  const formattedDate = service?.appointment?.date;

  const handleOnClick = () => {
    deleteSavedAppointment(service.id);
  };

  return (
    <div className="flex flex-col border-2 border-gray-300 p-2">
      <h4>{service.name}</h4>
      <p>{service.description}</p>
      <p>Date: {`${formattedDate} ${service?.appointment?.timeSlot}`}</p>
      <div className="flex w-full">
        <Button
          className="!bg-red-500 ml-auto hover:!bg-red-700"
          onClick={handleOnClick}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default AppointmentsCard;
