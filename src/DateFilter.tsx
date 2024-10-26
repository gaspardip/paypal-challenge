import { ChangeEvent } from "react";

type DateFilterProps = {
  onChange: ({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate: string;
  }) => void;
};

export const DateFilter = ({ onChange }: DateFilterProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    const nextStartDate = target.name === "startDate" ? target.value : "";
    const nextEndDate = target.name === "endDate" ? target.value : "";

    onChange({ startDate: nextStartDate, endDate: nextEndDate });
  };

  return (
    <div>
      <input type="date" name="startDate" onChange={handleChange} />
      <input type="date" name="endDate" onChange={handleChange} />
    </div>
  );
};
