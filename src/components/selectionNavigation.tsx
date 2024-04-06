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
  const { currentService } = useUserServices();

  return (
    <section className="flex mt-5 p-5 border border-gray-500 fixed w-full bottom-20 h-20 bg-white">
      <div className="w-full flex justify-between">
        {serviceSelectionStatus !== "CATEGORY" && (
          <Button onClick={handleOnClickBack}>Prev</Button>
        )}
        <Button
          disabled={
            serviceSelectionStatus === "TIME" && !currentService?.appointment
          }
          className="ml-auto"
          onClick={handleOnClickNext}
        >
          Next
        </Button>
      </div>
    </section>
  );
};

export { SelectionNavigation };
