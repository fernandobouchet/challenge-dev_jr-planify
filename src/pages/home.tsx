import { CategoriesSelectorWrapper } from "@components/categories/categoriesSelectorWrapper";
import { ConfirmationWrapper } from "@components/confirm/confirmationWrapper";
import { TimeSelectorWrapper } from "@components/time/timeSelectorWrapper";
import { SelectionNavigation } from "@components/selectionNavigation";
import { useSelectionServiceStatus } from "@hooks/useSelectionServiceStatus";
import { useUserServices } from "@hooks/useUserServices";

const Home = () => {
  const { currentService } = useUserServices();
  const { serviceSelectionStatus, handleOnClickBack, handleOnClickNext } =
    useSelectionServiceStatus();

  return (
    <main>
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
