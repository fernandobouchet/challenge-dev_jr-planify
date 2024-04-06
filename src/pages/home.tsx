import { CategoriesSelectorWrapper } from "@components/categories/categoriesSelectorWrapper";
import { ConfirmationWrapper } from "@components/confirm/confirmationWrapper";
import { TimeSelectorWrapper } from "@components/time/timeSelectorWrapper";
import { SelectionNavigation } from "@components/selectionNavigation";
import { useSelectionServiceStatus } from "@hooks/useSelectionServiceStatus";
import { useUserServices } from "@hooks/useUserServices";
import ProgressBar from "@components/progressBar";

const Home = () => {
  const { currentService } = useUserServices();
  const { serviceSelectionStatus, handleOnClickBack, handleOnClickNext } =
    useSelectionServiceStatus();

  return (
    <main className="text-sm lg:text-base text-gray-700">
      <ProgressBar status={serviceSelectionStatus} />
      {serviceSelectionStatus === "CATEGORY" ? (
        <CategoriesSelectorWrapper />
      ) : serviceSelectionStatus === "TIME" ? (
        <TimeSelectorWrapper />
      ) : (
        <ConfirmationWrapper />
      )}
      <section className="flex flex-col justify-end bg-white z-10">
        {currentService && (
          <SelectionNavigation
            serviceSelectionStatus={serviceSelectionStatus}
            handleOnClickBack={handleOnClickBack}
            handleOnClickNext={handleOnClickNext}
          />
        )}
      </section>
    </main>
  );
};

export { Home };
