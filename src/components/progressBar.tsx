import { SelectionStatus } from "@types";

interface Props {
  status: SelectionStatus;
}

const ProgressBar = ({ status }: Props) => {
  const title =
    status === "CATEGORY"
      ? "Select service"
      : status === "TIME"
      ? "Select time"
      : "Confirm appointment";

  return (
    <div className="p-5">
      <h3 className="font-medium">{title}</h3>
      <div className="h-5 bg-gray-300 rounded-sm">
        <div
          className={`bg-emerald-400 h-full transition-width duration-500 ${
            status === "CATEGORY"
              ? "w-[25%]"
              : status === "TIME"
              ? "w-[70%]"
              : status === "CONFIRMATION"
              ? "w-[85%]"
              : "w-[100%]"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
