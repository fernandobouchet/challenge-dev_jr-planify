import { Button } from "@components/ui/button";
import { useUserServices } from "@hooks/useUserServices";
import slots from "@utils/slots.json";

const TimeSelectorWrapper = () => {
  const { currentService, setAppointmentToService } = useUserServices();

  const data = slots.filter((item) => item.serviceId === currentService?.id);

  return (
    <section className="p-5">
      <h3>Upcoming appointments available</h3>
      {data.length >= 1
        ? data.map((e) => (
            <>
              <p>{e.date}</p>
              <div className="grid grid-cols-2 gap-5">
                {e.availableTimeslots.map((slot) => (
                  <Button
                    className="text-center"
                    onClick={() =>
                      setAppointmentToService(new Date(e.date), slot)
                    }
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </>
          ))
        : "Sorry, there are no appointments available at the moment."}
    </section>
  );
};

export { TimeSelectorWrapper };
