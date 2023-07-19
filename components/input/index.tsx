import { ChangeEvent } from "react";
import styleInput from "pages/styles/input/styleInput.module.scss";
export type InputProps = {
  type: string;
  label: string;
  value: string | number | readonly string[] | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // className: string;
};

export const Input = ({
  label,
  type,
  value,
  onChange,
}: // className,
InputProps) => {
  return (
    <div className={styleInput.divInput}>
      <label className={styleInput.divInput__label} htmlFor="">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={styleInput.divInput__input}
      />
    </div>
  );
};
