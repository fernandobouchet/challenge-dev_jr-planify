import { formatDateToLocal, formatDateToText } from "@utils/functions";
import { TimeSelectorButton } from "@components/time/timeSelectorButton";

interface Props {
  timeData: { date: string; serviceId: number; availableTimeslots: string[] }[];
}

const TimeOptionsWrapper = ({ timeData }: Props) => {
  return (
    <div className="flex flex-col items-center">
      {timeData.map((service) => (
        <div className="w-full py-3" key={service.date}>
          <p className="pb-4">
            {formatDateToText(formatDateToLocal(service.date)).toString()}
          </p>
          <div className="grid grid-cols-2 gap-5">
            {service.availableTimeslots.map((slot, _index) => (
              <TimeSelectorButton
                key={_index + slot}
                date={formatDateToLocal(service.date)}
                slot={slot}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export { TimeOptionsWrapper };
