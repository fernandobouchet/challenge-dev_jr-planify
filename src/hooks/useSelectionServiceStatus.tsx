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
  };

  const handleOnClickBack = () => {
    if (serviceSelectionStatus === "TIME") {
      setServiceSelectionStatus("CATEGORY");
    }
    if (serviceSelectionStatus === "CONFIRMATION") {
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
