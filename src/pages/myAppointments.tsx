import AppointmentsCard from "@components/appointments/appointmentsCard";
import { useUserServices } from "@hooks/useUserServices";

const MyAppointments = () => {
  const { appointments } = useUserServices();

  return (
    <main className="text-sm lg:text-base text-gray-700">
      <section className="section-container">
        <h1 className="text-center font-medium">My appointments</h1>
        {appointments.length >= 1 ? (
          <div className="flex flex-col gap-5 mt-5">
            {appointments.map((service) => (
              <AppointmentsCard service={service} />
            ))}
          </div>
        ) : (
          <p className="mt-5">There are no appointments confirmed yet.</p>
        )}
      </section>
    </main>
  );
};

export { MyAppointments };
