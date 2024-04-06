import { useUserServices } from "@hooks/useUserServices";

const ConfirmationWrapper = () => {
  const { currentService } = useUserServices();

  return (
    <section className="p-5">
      {currentService?.name}
      <p>{currentService?.appointment?.timeSlot}</p>
    </section>
  );
};

export { ConfirmationWrapper };
