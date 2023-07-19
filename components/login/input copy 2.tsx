import { ReactNode } from "react";

export type LoginInputProps = {
  type: string;
  label: string;
};

export const InputEmail = ({ type, label }: LoginInputProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-xs" htmlFor="">
        {label}
      </label>
      <input
        type={type}
        className="border-red-900 bg-[pink] m-2 h-[6vh] w-[20vw] rounded-md text-center"
      />
    </div>
  );
};
