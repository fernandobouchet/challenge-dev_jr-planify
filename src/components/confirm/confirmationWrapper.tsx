import { useUserServices } from "@hooks/useUserServices";

const ConfirmationWrapper = () => {
  const { currentService } = useUserServices();
  console.log(currentService);
  const formattedDate = currentService?.appointment?.date;

  return (
    <section className="section-container">
      <div className={`border-2 border-gray-300 p-4`}>
        <h3>Service: {currentService?.name}</h3>

        <p>
          Date: {`${formattedDate} ${currentService?.appointment?.timeSlot}`}
        </p>
      </div>
    </section>
  );
};

export { ConfirmationWrapper };
