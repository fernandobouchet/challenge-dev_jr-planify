import { Button } from "@components/ui/button";
import { useUserServices } from "@hooks/useUserServices";
import { SelectionStatus } from "@types";

interface Props {
  serviceSelectionStatus: SelectionStatus;
  handleOnClickBack: () => void;
  handleOnClickNext: () => void;
}

const SelectionNavigation = ({
  serviceSelectionStatus,
  handleOnClickBack,
  handleOnClickNext,
}: Props) => {
  const { currentService, saveAppointment } = useUserServices();

  const handleOnClickConfirm = () => {
    handleOnClickNext();
    saveAppointment();
  };

  return (
    <section className="flex mt-5 p-2 border-2 border-gray-300 fixed w-full bottom-20 h-20 bg-white">
      <div className="w-full flex justify-between p-3">
        {serviceSelectionStatus !== "CATEGORY" && (
          <Button onClick={handleOnClickBack}>Prev</Button>
        )}
        {serviceSelectionStatus === "CATEGORY" ||
        serviceSelectionStatus === "TIME" ? (
          <Button
            disabled={
              serviceSelectionStatus === "TIME" && !currentService?.appointment
            }
            className="ml-auto"
            onClick={handleOnClickNext}
          >
            Next
          </Button>
        ) : (
          <Button onClick={handleOnClickConfirm}>Confirm</Button>
        )}
      </div>
    </section>
  );
};

export { SelectionNavigation };
