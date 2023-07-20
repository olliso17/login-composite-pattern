import { ChangeEvent } from "react";
export type InputProps = {
  type: string;
  label: string;
  value: string | number | readonly string[] | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  classNameDiv: string;
  classNameLabel: string;
  classNameInput: string;
};

export const InputRoot = ({
  label,
  type,
  value,
  onChange,
  classNameDiv,
  classNameLabel,
  classNameInput
}: 
InputProps) => {
  return (
    <div className={classNameDiv}>
      <label className={classNameLabel} htmlFor="">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={classNameInput}
      />
    </div>
  );
};
