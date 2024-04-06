import { useUserServices } from "@hooks/useUserServices";

const ConfirmationWrapper = () => {
  const { currentService } = useUserServices();

  return (
    <div>
      {currentService?.name}
      <p>{currentService?.appointment?.timeSlot}</p>
    </div>
  );
};

export { ConfirmationWrapper };
