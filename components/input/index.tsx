import { ChangeEvent } from "react";
import { inputStyle } from "../../util/styles_var";

export type InputProps = {
  type: string;
  label: string;
  value: string | number | readonly string[] | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className: string;
};

export const Input = ({
  label,
  type,
  value,
  onChange,
  className,
}: InputProps) => {
  return (
    <div className="flex flex-col ">
      <label className="text-xs" htmlFor="">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
};
