import { Button } from "@components/ui/button";
import { useUserServices } from "@hooks/useUserServices";

interface Props {
  date: string;
  slot: string;
}

const TimeSelectorButton = ({ date, slot }: Props) => {
  const { currentService, setAppointmentToService } = useUserServices();

  const isSlotSelected =
    currentService?.appointment?.date === date &&
    currentService?.appointment?.timeSlot === slot;

  const handleClick = () => {
    setAppointmentToService(date, slot);
  };

  return (
    <Button
      className={`text-center h-8 ${
        isSlotSelected
          ? "!bg-slate-600 !text-white"
          : "!bg-gray-300 !text-slate-500"
      }`}
      onClick={handleClick}
    >
      {slot}
    </Button>
  );
};

export { TimeSelectorButton };
