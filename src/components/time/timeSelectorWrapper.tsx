import { useUserServices } from "@hooks/useUserServices";
import { TimeOptionsWrapper } from "@components/time/timeOptionsWrapper";
import slots from "@utils/slots.json";

const TimeSelectorWrapper = () => {
  const { currentService } = useUserServices();

  const data = slots.filter((item) => item.serviceId === currentService?.id);

  return (
    <section className="section-container">
      <div className={`border-2 border-gray-300 p-4`}>
        <h3>Upcoming appointments available</h3>
        {data.length >= 1 ? (
          <TimeOptionsWrapper timeData={data} />
        ) : (
          <p className="pt-5">
            Sorry, there are no appointments available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

export { TimeSelectorWrapper };
