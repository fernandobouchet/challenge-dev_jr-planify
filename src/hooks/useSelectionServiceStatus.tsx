import { useState } from "react";
import { SelectionStatus } from "@types";

const useSelectionServiceStatus = () => {
  const [serviceSelectionStatus, setServiceSelectionStatus] =
    useState<SelectionStatus>("CATEGORY");

  const handleOnClickNext = () => {
    if (serviceSelectionStatus === "CATEGORY") {
      setServiceSelectionStatus("TIME");
    }
    if (serviceSelectionStatus === "TIME") {
      setServiceSelectionStatus("CONFIRMATION");
    }
    if (serviceSelectionStatus === "CONFIRMATION") {
      setServiceSelectionStatus("SAVED");
    }
  };

  const handleOnClickBack = () => {
    if (serviceSelectionStatus === "TIME") {
      setServiceSelectionStatus("CATEGORY");
    }
    if (
      serviceSelectionStatus === "CONFIRMATION" ||
      serviceSelectionStatus === "SAVED"
    ) {
      setServiceSelectionStatus("TIME");
    }
  };

  return {
    serviceSelectionStatus,
    handleOnClickNext,
    handleOnClickBack,
  };
};

export { useSelectionServiceStatus };
