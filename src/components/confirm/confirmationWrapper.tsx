import { useUserServices } from "@hooks/useUserServices";
import { Link } from "react-router-dom";

const ConfirmationWrapper = () => {
  const { currentService } = useUserServices();
  const formattedDate = currentService?.appointment?.date;

  return (
    <section className="section-container">
      {currentService ? (
        <div className={`border-2 border-gray-300 p-4`}>
          <h3>Service: {currentService?.name}</h3>

          <p>
            Date: {`${formattedDate} ${currentService?.appointment?.timeSlot}`}
          </p>
        </div>
      ) : (
        <p className="text-center m-auto">
          Congratulations! The appointment has been confirmed, you can check
          your confirmed appointments in&nbsp;
          <Link className="underline" to="my-appointments">
            my appointments
          </Link>
          .
        </p>
      )}
    </section>
  );
};

export { ConfirmationWrapper };
