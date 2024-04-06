import { ReactNode, createContext, useContext, useState } from "react";
import { Service } from "@types";

interface Props {
  currentService: Service | null;
  toggleSelectedService: (service: Service) => void;
  appointments: Service[];
  saveSelectedSevice: (service: Service) => void;
}

const UserSerivicesContext = createContext<Props>({
  currentService: null,
  appointments: [],
  toggleSelectedService: () => {},
  saveSelectedSevice: () => {},
});

export const ServicesProvider = ({ children }: { children: ReactNode }) => {
  const [currentService, setCurrentService] = useState<Service | null>(null);
  const [appointments, setAppointments] = useState<Service[]>([]);

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

  return (
    <UserSerivicesContext.Provider
      value={{
        currentService,
        toggleSelectedService,
        appointments,
        saveSelectedSevice,
      }}
    >
      {children}
    </UserSerivicesContext.Provider>
  );
};

export const useUserServices = () => useContext(UserSerivicesContext);
