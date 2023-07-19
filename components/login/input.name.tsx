import { ReactNode } from "react";
import { useRecoilState } from "recoil";
import { nameInputState } from "../states";
import { inputStyle } from "../../util/styles_var";

export type LoginInputNameProps = {
  label: string;
};

export const InputName = ({ label }: LoginInputNameProps) => {
  const [name, setName] = useRecoilState(nameInputState);
  return (
    <div className="flex flex-col ">
      <label className="text-xs" htmlFor="">
        {label}
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={inputStyle}
      />
    </div>
  );
};
