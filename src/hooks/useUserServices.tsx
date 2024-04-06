import { ReactNode, createContext, useContext, useState } from "react";
import { Service } from "@types";

interface Props {
  currentService: Service | null;
  toggleSelectedService: (service: Service) => void;
  appointments: Service[];
  saveSelectedSevice: (service: Service) => void;
  setAppointmentToService: (date: string, timeSlot: string) => void;
  saveAppointment: () => void;
  deleteSavedAppointment: (id: number) => void;
}

const UserSerivicesContext = createContext<Props>({
  currentService: null,
  appointments: [],
  toggleSelectedService: () => {},
  saveSelectedSevice: () => {},
  setAppointmentToService: () => {},
  saveAppointment: () => {},
  deleteSavedAppointment: () => {},
});

export const ServicesProvider = ({ children }: { children: ReactNode }) => {
  const savedAppointmentsJSON = localStorage.getItem("saved_appointments");
  const savedAppointments = savedAppointmentsJSON
    ? JSON.parse(savedAppointmentsJSON)
    : [];

  const [currentService, setCurrentService] = useState<Service | null>(null);
  const [appointments, setAppointments] =
    useState<Service[]>(savedAppointments);

  const toggleSelectedService = (service: Service) => {
    if (currentService?.id !== service.id) {
      setCurrentService(service);
    } else {
      setCurrentService(null);
    }
  };

  const saveSelectedSevice = (service: Service) => {
    setAppointments([...appointments, service]);
  };

  const setAppointmentToService = (date: string, timeSlot: string) => {
    if (!currentService) return;
    setCurrentService({
      ...currentService,
      appointment: {
        date: date,
        timeSlot: timeSlot,
      },
    });
  };

  const saveAppointment = () => {
    if (!currentService) return;
    setAppointments([...appointments, currentService]);
    savedAppointments.push(currentService);
    localStorage.setItem(
      "saved_appointments",
      JSON.stringify(savedAppointments)
    );
    setCurrentService(null);
  };

  const deleteSavedAppointment = (id: number) => {
    const savedAppointment = appointments.find(
      (appointment) => appointment.id === id
    );
    if (!savedAppointment) return;
    const filteredAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(filteredAppointments);
    localStorage.setItem(
      "saved_appointments",
      JSON.stringify(filteredAppointments)
    );
  };

  return (
    <UserSerivicesContext.Provider
      value={{
        currentService,
        toggleSelectedService,
        appointments,
        saveSelectedSevice,
        setAppointmentToService,
        saveAppointment,
        deleteSavedAppointment,
      }}
    >
      {children}
    </UserSerivicesContext.Provider>
  );
};

export const useUserServices = () => useContext(UserSerivicesContext);
